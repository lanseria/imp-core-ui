<template>
  <page-container>
    <template #extra>
      <n-button
        type="primary"
        :loading="impSubmitLoading"
        :disabled="impSubmitLoading"
        @click="handleSubmit()"
        >保存</n-button
      >
    </template>
    <n-form
      :model="modelRef"
      ref="FormRef"
      label-placement="left"
      :label-width="120"
      style="margin-top: 40px"
    >
      <n-grid :cols="24" :x-gap="24">
        <n-form-item-gi :span="12" label="用户名" path="username">
          <n-input
            placeholder="请输入用户名"
            disabled
            v-model:value="modelRef.username"
          />
        </n-form-item-gi>
        <n-form-item-gi :span="12" label="姓名" path="realName">
          <n-input placeholder="请输入姓名" v-model:value="modelRef.realName" />
        </n-form-item-gi>
      </n-grid>
    </n-form>
  </page-container>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { NGrid, NButton, NFormItemGi, NForm, NInput } from "naive-ui";
import { useImpPageLoad } from "/@/hooks/useLoad";
import { editDetailReq, informationReq } from "/@/api/Admin/User";
import { UserDTO } from "/@/types/Admin/User/dto";
import { useImpSubmit } from "/@/hooks/useForm";
export default defineComponent({
  components: {
    NGrid,
    NButton,
    NFormItemGi,
    NForm,
    NInput
  },
  setup() {
    // use
    const { impPageLoading, impPageLoad } = useImpPageLoad();
    const { impSubmitLoading, impSubmit } = useImpSubmit();
    // refs
    const FormRef = ref();
    // ref
    const modelRef = ref(new UserDTO());
    // method
    const pageAction = async () => {
      try {
        const { data } = await informationReq();
        modelRef.value.mergeProperties(data);
      } catch (error) {
        throw new Error(error);
      }
    };
    const loadPage = async () => {
      await impPageLoad(pageAction);
    };
    const submitAction = async () => {
      try {
        const { data } = await editDetailReq(modelRef.value);
        if (data) {
          window.$message.success("保存成功");
          loadPage();
        }
      } catch (error) {
        console.error(error);
      }
    };
    const handleSubmit = async () => {
      impSubmit(FormRef.value, submitAction);
    };
    // hook
    onMounted(() => {
      loadPage();
    });
    return {
      // refs
      FormRef,
      // ref
      impPageLoading,
      impSubmitLoading,
      modelRef,
      // method
      handleSubmit
    };
  }
});
</script>
