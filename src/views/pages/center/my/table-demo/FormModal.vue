<template>
  <imp-modal ref="ImpModalRef" title="用户">
    <n-form :model="modelRef" ref="formRef">
      <n-form-item path="username" label="用户名">
        <n-input v-model:value="modelRef.username" />
      </n-form-item>
      <n-form-item path="realName" label="真实姓名">
        <n-input v-model:value="modelRef.realName" />
      </n-form-item>
      <n-form-item path="phone" label="手机号">
        <n-input v-model:value="modelRef.phone" />
      </n-form-item>
    </n-form>
    <template #footer>
      <n-space>
        <n-button type="primary" @click="close()">保存</n-button>
        <n-button @click="close()">返回</n-button>
      </n-space>
    </template>
  </imp-modal>
</template>
<script lang="ts">
import { NForm, NFormItem, NInput, NSpace, NButton } from "naive-ui";
import { defineComponent, ref } from "vue";
import { CommonDTO } from "/@/types/Common/dto";
class UserFormDTO extends CommonDTO {
  userId = 0;
  username = "";
  realName = "";
  phone = "";
}
export default defineComponent({
  emits: ["load-page"],
  components: {
    NForm,
    NFormItem,
    NInput,
    NSpace,
    NButton
  },
  setup(props, { emit }) {
    // refs
    const ImpModalRef = ref();
    // ref
    const modelRef = ref(new UserFormDTO());
    // method
    const open = (row?: IObj) => {
      if (row) {
        modelRef.value.mergeProperties(row);
      }
      ImpModalRef.value.showModal = true;
    };
    const close = () => {
      modelRef.value = new UserFormDTO();
      ImpModalRef.value.showModal = false;
      emit("load-page");
    };
    return {
      // refs
      ImpModalRef,
      // ref
      modelRef,
      // method
      open,
      close
    };
  }
});
</script>
