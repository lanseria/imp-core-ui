<template>
  <div>加载中</div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useImpRoute } from "/@/hooks/useRoute";
import { useUserStore } from "/@/store/modules/user";
export default defineComponent({
  name: "CenterIndex",
  setup() {
    const { replacePath } = useImpRoute();
    onMounted(() => {
      const userStore = useUserStore();
      const enableWorkbenchList = userStore.enableWorkbenchList;
      if (enableWorkbenchList.length) {
        replacePath("/workbench");
      } else {
        replacePath("/center/my");
      }
    });
    return {};
  }
});
</script>
