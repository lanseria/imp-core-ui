import { isRef, ref } from "vue";
import { FieldErrorList } from "async-validator";

export function useImpSubmit() {
  const impSubmitLoading = ref<boolean>(false);

  const showValidMessage = (error: FieldErrorList) => {
    for (const key in error) {
      if (Object.prototype.hasOwnProperty.call(error, key)) {
        const i = Object.keys(error).indexOf(key);
        if (i === 0) {
          const element = error[key];
          window.$message.warning(element[0].message);
          break;
        }
      }
    }
  };

  const promiseValidate = (formRef: IObj) => {
    return new Promise(resolve => {
      formRef.validate((errors: any) => {
        if (!errors) resolve(true);
        else {
          showValidMessage(errors);
        }
      });
    });
  };

  const impSubmit = async (formRef: IObj, cb: Fn) => {
    try {
      impSubmitLoading.value = true;
      if (!formRef) {
        throw "ref组件未加载成功";
      }
      if (isRef(formRef)) {
        throw "refs 组件未添加.value";
      }
      const valid = await promiseValidate(formRef);
      if (valid) {
        try {
          await cb();
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
      window.$message.warning(error);
    } finally {
      impSubmitLoading.value = false;
    }
  };
  return {
    impSubmitLoading,
    impSubmit
  };
}
