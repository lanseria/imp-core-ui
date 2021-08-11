<template>
  <div class="header-box">
    <div class="title">
      {{ name }}
      &nbsp;
      <n-switch :value="showAnnotate" @update:value="handleUpdate">
        <template #checked>批注</template>
        <template #unchecked>简洁</template>
      </n-switch>
    </div>
    <div class="tabs">
      <n-tag checkable :checked="!isAnnotate" @click="handleView()">
        阅读模式
      </n-tag>
      <n-tag checkable :checked="isAnnotate" @click="handleAnnotate()">
        批注模式
      </n-tag>
    </div>
    <div class="viewer-tools">
      <n-space>
        <n-pagination
          :page="current"
          :page-count="total"
          :page-slot="5"
          @update:page="handlePage"
        />
        <n-button size="small" ghost @click="handleFullscreen()">
          <template #icon>
            <n-icon>
              <ExpandIcon />
            </n-icon>
          </template>
        </n-button>
        <n-button size="small" ghost @click="goBack()"> 关闭 </n-button>
      </n-space>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useImpRoute } from "/@/hooks/useRoute";
import { NButton, NPagination, NTag, NIcon, NSpace, NSwitch } from "naive-ui";
import { Expand as ExpandIcon } from "@vicons/ionicons5";
export default defineComponent({
  props: {
    name: {
      type: String,
      default: ""
    },
    current: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 1
    },
    isAnnotate: {
      type: Boolean,
      required: true
    },
    showAnnotate: {
      type: Boolean,
      required: true
    }
  },
  emits: [
    "update:isAnnotate",
    "on-page",
    "on-fullscreen",
    "update:showAnnotate"
  ],
  components: {
    NButton,
    NPagination,
    NTag,
    NIcon,
    NSpace,
    NSwitch,

    ExpandIcon
  },
  setup(props, { emit }) {
    const { goBack } = useImpRoute();
    // method
    const handleView = () => {
      emit("update:isAnnotate", false);
    };
    const handleAnnotate = () => {
      emit("update:isAnnotate", true);
    };
    const handlePage = (payload: number) => {
      emit("on-page", payload);
    };
    const handleFullscreen = () => {
      emit("on-fullscreen");
    };
    const handleUpdate = (v: boolean) => {
      emit("update:showAnnotate", v);
    };
    return {
      goBack,
      handleView,
      handleAnnotate,
      handlePage,
      handleFullscreen,
      handleUpdate
    };
  }
});
</script>
<style lang="css" scoped>
.header-box {
  background-color: var(--color-modal);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0 20px;
}
.title {
  display: flex;
  align-items: center;
}
.tabs {
  display: flex;
}

.viewer-tools {
  display: flex;
  align-items: center;
}
</style>
