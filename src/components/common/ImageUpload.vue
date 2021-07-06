<template>
  <div class="image-upload-wrap">
    <n-button @click="handleOpen()"> 点击上传 </n-button>
    <imp-image class="image" :src="src"></imp-image>
  </div>
  <cropper-modal ref="CropperModalRef" @img-url="onImgUrl"></cropper-modal>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useVModel } from "@vueuse/core";
import { NButton } from "naive-ui";
import CropperModal from "../utils/CropperModal.vue";
export default defineComponent({
  name: "ImageUpload",
  props: {
    modelValue: {
      type: String,
      required: true
    }
  },
  components: {
    NButton,
    CropperModal
  },
  setup(props, { emit }) {
    // refs
    const CropperModalRef = ref();
    // ref
    const src = useVModel(props, "modelValue", emit);
    // method
    const handleOpen = () => {
      CropperModalRef.value.open(src.value);
    };
    const onImgUrl = (url: string) => {
      src.value = url;
    };
    return {
      // refs
      CropperModalRef,
      // ref
      src,
      // method
      handleOpen,
      onImgUrl
    };
  }
});
</script>
<style lang="css" scoped>
.image-upload-wrap {
  display: flex;
  flex-direction: column;
}
.image {
  margin-top: 10px;
}
</style>
