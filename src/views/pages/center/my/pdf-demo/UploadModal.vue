<template>
  <imp-modal ref="ImpModalRef" title="上传PDF">
    <n-form ref="formRef">
      <n-form-item path="file" label="文件">
        <n-upload
          ref="UploadRef"
          :default-upload="false"
          action="/api/admin/pdf/create"
          :headers="{
            Authorization: headers
          }"
          @finish="handleFinish"
        >
          <n-button>上传文件</n-button>
        </n-upload>
      </n-form-item>
    </n-form>
    <template #footer>
      <n-space>
        <n-button type="primary" @click="handleSave()">保存</n-button>
        <n-button @click="close()">返回</n-button>
      </n-space>
    </template>
  </imp-modal>
</template>
<script lang="ts">
import { NForm, NFormItem, NSpace, NButton, NUpload } from "naive-ui";
import { defineComponent, ref, computed } from "vue";
import { useUserStore } from "/@/store/modules/user";
export default defineComponent({
  emits: ["load-page"],
  components: {
    NForm,
    NFormItem,
    NSpace,
    NButton,
    NUpload
  },
  setup(props, { emit }) {
    const userStore = useUserStore();
    // refs
    const ImpModalRef = ref();
    const UploadRef = ref();
    // computed
    const headers = computed(() => {
      return `Bearer ${userStore.userToken?.access_token}`;
    });
    // method
    const open = () => {
      ImpModalRef.value.showModal = true;
    };
    const close = () => {
      ImpModalRef.value.showModal = false;
      emit("load-page");
    };
    const handleSave = () => {
      UploadRef.value.submit();
    };
    const handleFinish = () => {
      close();
    };
    return {
      // refs
      ImpModalRef,
      UploadRef,
      // computed
      headers,
      // method
      open,
      close,
      handleSave,
      handleFinish
    };
  }
});
</script>
