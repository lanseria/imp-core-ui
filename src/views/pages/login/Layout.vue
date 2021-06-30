<template>
  <n-layout :native-scrollbar="false" position="absolute">
    <div class="banner" style="overflow: hidden">
      <right-image class="right-image" />
      <div class="login-main">
        <n-h1
          style="margin-top: 0; font-size: 40px !important"
          class="imp-title"
        >
          <span>IMP CORE UI</span>
        </n-h1>
        <router-view />
      </div>
      <left-image class="left-image" />
    </div>
    <n-layout-footer>
      <landing-footer centered />
    </n-layout-footer>
  </n-layout>
</template>

<script lang="ts">
import LandingFooter from "./Footer.vue";
import leftImage from "./Left.vue";
import rightImage from "./Right.vue";
import { NLayout, NLayoutFooter, NH1 } from "naive-ui";
export default {
  components: {
    LandingFooter,
    leftImage,
    rightImage,
    NLayout,
    NLayoutFooter,
    NH1
  },
  setup() {
    return {};
  }
};
</script>

<style scoped>
.banner {
  height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
}

.imp::after {
  content: "";
  width: 100%;
  height: 64px;
}

.naive-title {
  margin-bottom: 20px !important;
}

@media only screen and (max-width: 1920px) {
  .left-image {
    right: calc(50% + 270px);
    width: calc(50% - 270px);
    min-width: 440px;
  }
  .right-image {
    left: calc(50% + 270px);
    width: calc(50% - 270px);
    min-width: 440px;
  }
}

@media only screen and (min-width: 1920px) {
  .left-image {
    left: 0;
    width: 700px;
  }
  .right-image {
    right: 0;
    width: 700px;
  }
}

.login-main {
  width: 400px;
  left: calc(50% - 200px);
  position: absolute;
}
.left-image {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.right-image {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

@media only screen and (max-width: 1023px) {
  .banner {
    position: static;
    text-align: left;
    padding-left: 16px;
    transform: none;
    padding-top: 60px;
    padding-right: 16px;
    min-height: 550px;
    height: calc(100vh - 124px);
  }

  .login-main {
    width: 100%;
    left: 0;
    position: relative;
  }
  .left-image {
    position: relative;
    left: -16px;
    min-width: unset;
    width: 300px;
    top: 8px;
    transform: none;
  }
}
</style>
