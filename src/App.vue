<template>
  <n-config-provider :theme="theme">
    <router-view />
  </n-config-provider>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { NConfigProvider, darkTheme } from "naive-ui";
import { useAppStore } from "./store/modules/app";
export default defineComponent({
  components: {
    NConfigProvider
  },
  name: "App",
  setup() {
    const appStore = useAppStore();
    const theme = computed(() => {
      return appStore.getTheme === "dark" ? darkTheme : null;
    });
    return {
      theme
    };
  }
});
</script>

<style>
#app {
  height: 100%;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, "\5FAE\8F6F\96C5\9ED1", Arial, sans-serif;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
