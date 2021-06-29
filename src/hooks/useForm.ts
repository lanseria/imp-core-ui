import { ref } from "vue";
import { FieldErrorList } from "async-validator";

export function useIepSubmit() {
  const iepSubmitLoading = ref<boolean>(false);

  const showValidMessage = (error: FieldErrorList) => {
    for (const key in error) {
      if (Object.prototype.hasOwnProperty.call(error, key)) {
        const i = Object.keys(error).indexOf(key);
        if (i === 0) {
          const element = error[key];
          console.log(element[0].message);
          break;
        }
      }
    }
  };

  const promiseValidate = (formRef: IObj) => {
    return new Promise((resolve, reject) => {
      // TODO: should remove value of Refs!
      if (formRef) {
        formRef.validate((errors: IObj) => {
          if (!errors) resolve(true);
          else reject(errors);
        });
      } else {
        reject("ref组件未加载成功");
      }
    });
  };

  const iepSubmit = async (formRef: IObj, cb: Fn) => {
    try {
      iepSubmitLoading.value = true;
      const valid = await promiseValidate(formRef);
      if (valid) {
        try {
          await cb();
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
      showValidMessage(error);
    } finally {
      iepSubmitLoading.value = false;
    }
  };
  return {
    iepSubmitLoading,
    iepSubmit
  };
}
