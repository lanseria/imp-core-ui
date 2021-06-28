<template>
  <n-layout-header bordered class="nav">
    <n-text tag="div" class="ui-logo" :depth="1" @click="handleLogoClick">
      <img src="/assets/images/naivelogo.svg" />
      <span>Imp-core-ui</span>
    </n-text>
    <div></div>
    <div class="nav-end">
      <n-button text class="nav-picker" @click="handleThemeUpdate">
        {{ appStore.getThemeText }}
      </n-button>
    </div>
  </n-layout-header>
</template>

<script lang="ts">
import { NLayoutHeader, NText, NButton } from "naive-ui";
import { router } from "/@/router";
import { useAppStore } from "/@/store/modules/app";

export default {
  name: "DashboardHeader",
  components: {
    NLayoutHeader,
    NText,
    NButton
  },
  setup() {
    // use
    const appStore = useAppStore();
    const handleLogoClick = () => {
      router.push("/");
    };
    const handleThemeUpdate = () => {
      appStore.triggerTheme();
    };
    return {
      // computed
      appStore,
      // method
      handleLogoClick,
      handleThemeUpdate
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
