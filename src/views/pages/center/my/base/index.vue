<template>
  <imp-page-container>
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

        <n-form-item-gi :span="24" label="头像" path="avatar">
          <image-upload v-model="modelRef.avatar"></image-upload>
        </n-form-item-gi>

        <n-form-item-gi :span="12" label="最高学历" path="education">
          <data-dict-select
            v-model:value="modelRef.education"
            dictName="hrms_highest_educational"
            placeholder="请选择最高学历"
          ></data-dict-select>
        </n-form-item-gi>
        <n-form-item-gi :span="12" label="外语水平" path="language">
          <n-input
            placeholder="请输入外语水平"
            v-model:value="modelRef.language"
          />
        </n-form-item-gi>

        <n-form-item-gi :span="24" label="卓越标签" path="abilityTag">
          <n-dynamic-tags v-model:value="modelRef.abilityTag" />
        </n-form-item-gi>

        <n-form-item-gi :span="24" label="专业标签" path="projectTag">
          <n-dynamic-tags v-model:value="modelRef.projectTag" />
        </n-form-item-gi>

        <n-form-item-gi :span="24" label="学习标签" path="learningTag">
          <n-dynamic-tags v-model:value="modelRef.learningTag" />
        </n-form-item-gi>

        <n-form-item-gi :span="24" label="个性签名" path="signature">
          <n-input
            type="textarea"
            maxlength="30"
            show-count
            placeholder="请输入个性签名"
            v-model:value="modelRef.signature"
          />
        </n-form-item-gi>
      </n-grid>
    </n-form>
  </imp-page-container>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import {
  NGrid,
  NButton,
  NFormItemGi,
  NForm,
  NInput,
  NDynamicTags
} from "naive-ui";
import { useImpPageLoad } from "/@/hooks/useLoad";
import { editDetailReq, informationReq } from "/@/api/Admin/User";
import { UserDTO } from "/@/types/Admin/User/dto";
import { useImpSubmit } from "/@/hooks/useForm";
import ImageUpload from "/@/components/common/ImageUpload.vue";
import DataDictSelect from "/@/components/common/DataDictSelect.vue";
export default defineComponent({
  components: {
    NGrid,
    NButton,
    NFormItemGi,
    NForm,
    NInput,
    NDynamicTags,
    ImageUpload,
    DataDictSelect
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
