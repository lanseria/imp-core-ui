<template>
  <imp-modal ref="ImpModalRef" title="图片上传">
    <cropper
      ref="CropperRef"
      class="cropper"
      :src="imgUrl"
      :stencil-props="{
        handlers: {},
        movable: false,
        scalable: false,
        aspectRatio
      }"
      :resize-image="{
        adjustStencil: false
      }"
      image-restriction="stencil"
    ></cropper>
    <template #footer>
      <n-space>
        <n-upload
          accept="image/*"
          :default-upload="false"
          ref="upload"
          :file-list-style="fileListStyle"
          @before-upload="onBeforeUpload"
        >
          <n-button>选择图片</n-button>
        </n-upload>
        <n-button @click="handleSave()">保存上传</n-button>
      </n-space>
    </template>
  </imp-modal>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { NUpload, NButton, NSpace } from "naive-ui";
import { Cropper } from "vue-advanced-cropper";
import "vue-advanced-cropper/dist/style.css";
import { postFileUploadAvatarReq } from "/@/api/Admin/File";
export default defineComponent({
  props: {
    aspectRatio: {
      type: Number,
      default: 1
    }
  },
  components: {
    Cropper,
    NUpload,
    NButton,
    NSpace
  },
  emits: ["img-url"],
  setup(props, { emit }) {
    // let
    let fileName = "";
    // refs
    const ImpModalRef = ref();
    const CropperRef = ref();
    // ref
    const imgUrl = ref("");
    // method
    const open = (src: string) => {
      imgUrl.value = src;
      ImpModalRef.value.showModal = true;
    };
    const close = () => {
      imgUrl.value = "";
      ImpModalRef.value.showModal = false;
    };
    const onBeforeUpload = async ({ file }: { file: IObj }) => {
      const reader = new FileReader();
      // 把 Array Buffer 转化为 blob 如果是 base64 不需要
      // 转化为 base64
      fileName = file.name;
      reader.readAsDataURL(file.file);
      reader.onload = () => {
        imgUrl.value = reader.result?.toString() || "";
      };
      return false;
    };

    const handleSave = () => {
      const canvas: HTMLCanvasElement = CropperRef.value.getResult().canvas;
      canvas.toBlob(async blob => {
        const formData = new FormData();
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        formData.append("file", blob!, fileName);
        // const img = window.URL.createObjectURL(blob);
        // console.log(img);
        const { code, msg, data } = await postFileUploadAvatarReq(formData);
        if (code) {
          window.$message.success(msg);
        } else {
          window.$message.success("上传成功");
          emit("img-url", data.url);
          close();
        }
      });
    };
    return {
      fileListStyle: {
        display: "none"
      },
      // refs
      ImpModalRef,
      CropperRef,
      // ref
      imgUrl,
      // method
      open,
      onBeforeUpload,
      handleSave
    };
  }
});
</script>
<style lang="css" scoped>
.cropper {
  height: 300px;
}
</style>
