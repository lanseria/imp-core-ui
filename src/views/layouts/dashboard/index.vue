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
      <n-menu :value="menuValue" :options="menuGroup" />
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
import { NLayout, NLayoutSider, NMenu } from "naive-ui";
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
    const { crtMatched } = useImpRoute();
    // computed
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
        const menu = menuMap.get(activeMenuGroup.value);
        const dfs = (node: any) => {
          if (node.children && node.children.length) {
            for (let i = 0; i < node.children.length; i++) {
              const m = node.children[i];
              if (node.children[i].hidden) {
                delete node.children[i];
              } else {
                dfs(m);
              }
            }
          } else {
            node.label = node.name;
            node.key = node.fullPath;
            delete node.icon;
            delete node.name;
            delete node.fullPath;
          }
        };
        menu?.forEach(m => dfs(m));
        return menu;
      }
      return [];
    });
    onMounted(() => {
      //
    });
    return {
      menuValue: null,
      options: [
        {
          label: "1973年的弹珠玩具",
          key: "pinball-1973"
        }
      ],
      // computed
      activeWorkbench,
      menuGroup
    };
  }
});
</script>
