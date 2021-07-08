<template>
  <n-select
    class="dashboard-select"
    :value="value"
    :options="enableWorkbenchOptions"
  />
</template>
<script lang="ts">
import { NSelect } from "naive-ui";
import { computed, defineComponent } from "vue";
import { useUserStore } from "/@/store/modules/user";
export default defineComponent({
  components: {
    NSelect
  },
  setup() {
    const enableWorkbenchOptions = computed(() => {
      const userStore = useUserStore();
      return userStore.enableWorkbenchList.map(m => {
        return {
          label: m.name as string,
          value: `/workbench/${m.path}`
        };
      });
    });
    return {
      value: "/workbench/ed",
      // computed
      enableWorkbenchOptions
    };
  }
});
</script>

<style lang="css" scoped>
.dashboard-select {
  padding: 20px;
  box-sizing: border-box;
}
</style>
