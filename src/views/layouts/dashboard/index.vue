<template>
  <n-layout :position="isMobile ? 'static' : 'absolute'" class="root-layout">
    <dashboard-header />
    <n-layout
      has-sider
      position="absolute"
      :style="{
        top: 'var(--header-height)'
      }"
    >
      <n-layout-sider
        :native-scrollbar="false"
        :collapsed-width="0"
        collapse-mode="transform"
        bordered
        show-trigger="bar"
        trigger-style="top: calc(50% - var(--header-height));"
      >
        <n-menu :value="menuValue" :options="options" />
      </n-layout-sider>
      <n-layout
        ref="layoutInstRef"
        :native-scrollbar="false"
        position="static"
        content-style="min-height: calc(100vh - var(--header-height)); display: flex; flex-direction: column;"
      >
        <router-view />
      </n-layout>
    </n-layout>
  </n-layout>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { NLayout, NLayoutSider, NMenu } from "naive-ui";
import { useIsMobile } from "/@/utils/composables";
import DashboardHeader from "../components/Header.vue";
export default defineComponent({
  name: "DashboardLayout",
  components: {
    NLayout,
    NLayoutSider,
    NMenu,
    DashboardHeader
  },
  setup() {
    const isMobileRef = useIsMobile();
    return {
      isMobile: isMobileRef,
      menuValue: null,
      options: [
        {
          label: "1973年的弹珠玩具",
          key: "pinball-1973"
        }
      ]
    };
  }
});
</script>
