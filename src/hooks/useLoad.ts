import { ref } from "vue";

interface LoadPage {
  (opt?: IObj): Promise<void> | void;
}

export function useImpPageLoad() {
  const impPageLoading = ref<boolean>(true);
  const impPageLoad = async (pageAction: LoadPage) => {
    try {
      impPageLoading.value = true;
      await pageAction();
    } catch (error) {
      console.log(error);
    } finally {
      impPageLoading.value = false;
    }
  };
  return {
    impPageLoad,
    impPageLoading
  };
}

export function useImpOptLoad() {
  const impOptLoading = ref<boolean>(false);
  const impOptLoad = async (optAction: LoadPage) => {
    try {
      impOptLoading.value = true;
      await optAction();
    } catch (error) {
      console.log(error);
    } finally {
      impOptLoading.value = false;
    }
  };
  return {
    impOptLoad,
    impOptLoading
  };
}
