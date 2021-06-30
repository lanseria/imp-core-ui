<template>
  <n-button text @click="handleThemeUpdate">
    {{ themeText }}
  </n-button>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { NButton } from "naive-ui";
import { useAppStore } from "../store/modules/app";
export default defineComponent({
  name: "DarkModeToggle",
  components: {
    NButton
  },
  setup() {
    // use
    const appStore = useAppStore();
    // computed
    const themeText = computed(() => {
      return appStore.getThemeText;
    });
    // method
    const handleThemeUpdate = () => {
      appStore.triggerTheme();
    };
    return {
      // computed
      themeText,
      // method
      handleThemeUpdate
    };
  }
});
</script>
