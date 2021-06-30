import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

export const useImpRoute = () => {
  // ref
  const routing = ref(false);
  // use
  const route = useRoute();
  const router = useRouter();
  // simple
  const goBack = async () => {
    routing.value = true;
    await router.go(-1);
    routing.value = false;
  };
  // push
  const pushName = async (name: string) => {
    routing.value = true;
    await router.push({
      name
    });
    routing.value = false;
  };
  const pushPath = async (path: string) => {
    routing.value = true;
    await router.push({
      path
    });
    routing.value = false;
  };
  return {
    // ref
    routing,
    // use
    route,
    router,
    // simple
    goBack,
    // push
    pushName,
    pushPath
  };
};
