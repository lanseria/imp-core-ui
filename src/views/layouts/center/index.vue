<template>
  <n-layout :position="isMobile ? 'static' : 'absolute'" class="root-layout">
    <dashboard-header />
    <router-view></router-view>
  </n-layout>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { NLayout } from "naive-ui";
import { useIsMobile } from "/@/utils/composables";
import DashboardHeader from "../components/Header.vue";
export default defineComponent({
  name: "CenterLayout",
  components: {
    NLayout,
    DashboardHeader
  },
  setup() {
    const isMobileRef = useIsMobile();
    return {
      isMobile: isMobileRef
    };
  }
});
</script>
