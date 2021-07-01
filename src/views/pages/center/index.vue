<template>
  <div>开发中</div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useImpRoute } from "/@/hooks/useRoute";
export default defineComponent({
  name: "CenterIndex",
  setup() {
    const { pushName } = useImpRoute();
    onMounted(() => {
      pushName("Base");
    });
    return {};
  }
});
</script>
