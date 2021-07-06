<template>
  <n-config-provider :theme="theme" :locale="locale" :date-locale="dateLocale">
    <n-dialog-provider>
      <n-notification-provider>
        <n-message-provider>
          <Slot />
        </n-message-provider>
      </n-notification-provider>
    </n-dialog-provider>
  </n-config-provider>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import {
  NConfigProvider,
  NMessageProvider,
  NNotificationProvider,
  NDialogProvider,
  darkTheme,
  zhCN,
  dateZhCN
} from "naive-ui";
import { useAppStore } from "./store/modules/app";
import Slot from "/@/views/layouts/Slot.vue";
export default defineComponent({
  components: {
    NConfigProvider,
    NMessageProvider,
    NNotificationProvider,
    NDialogProvider,
    Slot
  },
  name: "App",
  setup() {
    const appStore = useAppStore();
    const theme = computed(() => {
      return appStore.getTheme === "dark" ? darkTheme : null;
    });
    return {
      theme,
      locale: zhCN,
      dateLocale: dateZhCN
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
