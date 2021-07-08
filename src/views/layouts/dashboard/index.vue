<template>
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
      <dashboard-select></dashboard-select>
      <n-menu
        :value="activeMenu"
        :options="menuGroup"
        @update:value="handleSelect"
      />
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
</template>
<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import { MenuGroupOption, NLayout, NLayoutSider, NMenu } from "naive-ui";
import DashboardSelect from "./DashboardSelect.vue";
import { useImpRoute } from "/@/hooks/useRoute";
import { useUserStore } from "/@/store/modules/user";
export default defineComponent({
  name: "DashboardLayout",
  components: {
    NLayout,
    NLayoutSider,
    NMenu,
    DashboardSelect
  },
  setup() {
    const { crtMatched, crtPath, pushPath } = useImpRoute();
    // computed
    const activeMenu = computed(() => {
      if (crtPath.value.endsWith("/page")) {
        return crtPath.value.replace("/page", "");
      }
      return crtPath.value;
    });
    const activeWorkbench = computed(() => {
      return crtMatched.value[1].path;
    });
    const activeMenuGroup = computed(() => {
      if (activeWorkbench.value === "/workbench/ed") {
        return crtMatched.value[2].path;
      } else {
        return activeWorkbench.value;
      }
    });
    const menuGroup = computed(() => {
      const userStore = useUserStore();
      const menuMap: MenuComponentTreeMap = userStore.menuComponentTreeMap;
      if (menuMap.has(activeMenuGroup.value)) {
        const menus = menuMap.get(activeMenuGroup.value);
        return menus! as unknown as MenuGroupOption[];
      }
      return [];
    });
    // method
    const handleSelect = (key: string) => {
      pushPath(key);
    };
    onMounted(() => {
      //
    });
    return {
      // computed
      activeMenu,
      activeWorkbench,
      menuGroup,
      // method
      handleSelect
    };
  }
});
</script>
