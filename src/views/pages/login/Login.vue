<template>
  <n-layout :native-scrollbar="false" position="absolute">
    <div class="banner" style="overflow: hidden">
      <right-image class="right-image" />
      <div class="login-main">
        <n-h1
          style="margin-top: 0; font-size: 40px !important"
          class="naive-title"
        >
          <span>IMP CORE UI</span>
        </n-h1>
        <n-form
          ref="FormRef"
          :label-width="80"
          :rules="rules"
          :model="modelRef"
        >
          <n-form-item label="账号" path="username">
            <n-input
              placeholder="请输入账号"
              :maxlength="16"
              v-model:value="modelRef.username"
            >
              <template #prefix>
                <n-icon>
                  <person-outline-icon />
                </n-icon>
              </template>
            </n-input>
          </n-form-item>
          <n-form-item label="密码" path="password">
            <n-input
              type="password"
              show-password-toggle
              placeholder="请输入密码"
              :maxlength="16"
              v-model:value="modelRef.password"
            >
              <template #prefix>
                <n-icon>
                  <key-outline-icon />
                </n-icon>
              </template>
            </n-input>
          </n-form-item>
          <n-form-item label="验证码" path="code">
            <n-input
              placeholder="请输入验证码"
              :maxlength="2"
              v-model:value="modelRef.code"
            >
              <template #prefix>
                <n-icon>
                  <keypad-outline-icon />
                </n-icon>
              </template>
              <template #suffix>
                <code-img
                  ref="CodeImgRef"
                  @refresh="updateRandomStr"
                ></code-img>
              </template>
            </n-input>
          </n-form-item>
          <n-form-item>
            <n-button type="primary" @click="handleSubmit()">登录</n-button>
          </n-form-item>
        </n-form>
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
import CodeImg, { CodeImgRefs } from "./CodeImg.vue";
import {
  NLayout,
  NLayoutFooter,
  NForm,
  NFormItem,
  NInput,
  NButton,
  NIcon,
  NH1,
  useMessage
} from "naive-ui";
import {
  PersonOutline as PersonOutlineIcon,
  KeyOutline as KeyOutlineIcon,
  KeypadOutline as KeypadOutlineIcon
} from "@vicons/ionicons5";
import { ref } from "vue";
import { useIsTablet } from "/@/utils/composables";
import { rules } from "./options";
import { useUserStore } from "/@/store/modules/user";
export default {
  components: {
    LandingFooter,
    leftImage,
    rightImage,
    CodeImg,
    NLayout,
    NLayoutFooter,
    NForm,
    NFormItem,
    NInput,
    NButton,
    NIcon,
    NH1,
    PersonOutlineIcon,
    KeyOutlineIcon,
    KeypadOutlineIcon
  },
  setup() {
    // use
    const message = useMessage();
    const isTabletRef = useIsTablet();
    const userStore = useUserStore();
    // refs
    const FormRef = ref();
    const CodeImgRef = ref<CodeImgRefs>();
    const modelRef = ref({
      username: "",
      mobile: "",
      password: "",
      code: "",
      randomStr: ""
    });
    const updateRandomStr = (randomStr: string) => {
      modelRef.value.randomStr = randomStr;
    };
    const handleSubmit = () => {
      FormRef.value.validate((errors: any) => {
        if (!errors) {
          message.success("Valid");
          userStore.login(modelRef.value);
        } else {
          console.log(errors);
          message.error("Invalid");
        }
      });
    };
    return {
      // const
      rules: rules,
      // refs
      FormRef,
      CodeImgRef,
      // ref
      modelRef,
      isTablet: isTabletRef,
      // method
      updateRandomStr,
      handleSubmit
    };
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

.banner::after {
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
