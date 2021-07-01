<template>
  <n-layout-header bordered class="nav">
    <n-text tag="div" class="ui-logo" :depth="1" @click="handleLogoClick">
      <img src="/assets/images/naivelogo.svg" />
      <span>Imp-core-ui</span>
    </n-text>
    <div></div>
    <div class="nav-end">
      <dark-mode-toggle class="nav-picker"></dark-mode-toggle>
      <n-dropdown @select="handleSelect" trigger="click" :options="options">
        <n-button text :keyboard="false">{{ userInfo?.realName }}</n-button>
      </n-dropdown>
    </div>
  </n-layout-header>
</template>

<script lang="ts">
import { computed } from "@vue/runtime-core";
import { NLayoutHeader, NText, NButton, NDropdown } from "naive-ui";
import { router } from "/@/router";
import DarkModeToggle from "/@/components/common/DarkModeToggle.vue";
import { useUserStore } from "/@/store/modules/user";
export default {
  name: "DashboardHeader",
  components: {
    NLayoutHeader,
    NText,
    NButton,
    NDropdown,
    DarkModeToggle
  },
  setup() {
    // use
    const userStore = useUserStore();
    // computed
    const userInfo = computed(() => {
      return userStore.getUserInfo;
    });
    // method
    const handleLogoClick = () => {
      router.push("/");
    };
    const handleLogout = () => {
      const d = window.$dialog.warning({
        title: "退出",
        content: "真的要注销登录吗 ?",
        positiveText: "确定",
        onPositiveClick: () => {
          d.loading = true;
          return userStore.logout();
        },
        onNegativeClick: () => {
          window.$message.error("不确定");
        }
      });
    };
    const handleSelect = (key: string) => {
      switch (key) {
        case "logout":
          handleLogout();
          break;
        case "dashboard":
          router.push("/");
          break;
        case "center":
          router.push("/");
          break;
        default:
          break;
      }
    };
    return {
      // const
      options: [
        {
          label: "赋能台",
          key: "dashboard"
        },
        {
          label: "个人信息",
          key: "center"
        },
        {
          label: "登出",
          key: "logout"
        }
      ],
      // computed
      userInfo,
      // method
      handleLogoClick,
      handleSelect
    };
  }
};
</script>

<style scoped>
.nav {
  --side-padding: 32px;
  display: grid;
  grid-template-rows: calc(var(--header-height) - 1px);
  align-items: center;
  padding: 0 var(--side-padding);
  grid-template-columns: calc(272px - var(--side-padding)) 1fr auto;
}

.ui-logo {
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 18px;
}

.ui-logo > img {
  margin-right: 12px;
  height: 32px;
  width: 32px;
}

.nav-menu {
  padding-left: 36px;
}

.nav-picker {
  margin-right: 24px;
}

.nav-picker:last-child {
  margin-right: 0;
}

.nav-end {
  display: flex;
  align-items: center;
}
</style>

<style>
.nav-menu .n-menu-item {
  height: calc(var(--header-height) - 1px) !important;
}
</style>
