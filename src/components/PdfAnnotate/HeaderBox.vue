<template>
  <div class="header-box">
    <div class="title">
      {{ name }}
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
import { NButton, NPagination, NTag, NIcon, NSpace } from "naive-ui";
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
    }
  },
  emits: ["update:isAnnotate", "on-page", "on-fullscreen"],
  components: {
    NButton,
    NPagination,
    NTag,
    NIcon,
    NSpace,

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
    const handlePage = (payload: any) => {
      emit("on-page", payload);
    };
    const handleFullscreen = () => {
      emit("on-fullscreen");
    };
    return {
      goBack,
      handleView,
      handleAnnotate,
      handlePage,
      handleFullscreen
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

.tabs {
  display: flex;
}

.viewer-tools {
  display: flex;
  align-items: center;
}
</style>
