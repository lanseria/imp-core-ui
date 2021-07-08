<template>
  <div>加载中</div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useImpRoute } from "/@/hooks/useRoute";
export default defineComponent({
  name: "CenterIndex",
  setup() {
    const { pushPath } = useImpRoute();
    onMounted(() => {
      pushPath("/center/my");
    });
    return {};
  }
});
</script>
