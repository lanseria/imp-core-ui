<template>
  <div v-if="isAnnotate" class="tools-box">
    <n-space justify="space-between" style="flex: 1">
      <n-space class="select">
        <n-button
          size="small"
          :type="editState === 'Paint' ? 'primary' : 'default'"
          @click="handlePaint()"
          ghost
        >
          <template #icon>
            <n-icon>
              <BrushSharpIcon />
            </n-icon>
          </template>
        </n-button>
        <n-button
          size="small"
          :type="editState === 'Text' ? 'primary' : 'default'"
          @click="handleText()"
          ghost
        >
          <template #icon>
            <n-icon>
              <TextIcon />
            </n-icon>
          </template>
        </n-button>
      </n-space>
      <n-space class="property"></n-space>
      <n-space class="operate">
        <n-button size="small" type="primary" @click="handleSave()" ghost>
          <template #icon>
            <n-icon>
              <SaveOutlineIcon />
            </n-icon>
          </template>
        </n-button>
      </n-space>
    </n-space>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { NIcon, NSpace, NButton } from "naive-ui";
import {
  BrushSharp as BrushSharpIcon,
  Text as TextIcon,
  SaveOutline as SaveOutlineIcon
} from "@vicons/ionicons5";
export default defineComponent({
  props: {
    isAnnotate: {
      type: Boolean,
      required: true
    },
    editState: {
      type: String,
      required: true
    }
  },
  components: {
    NIcon,
    NSpace,
    NButton,

    BrushSharpIcon,
    TextIcon,
    SaveOutlineIcon
  },
  emits: ["on-save", "update:editState"],
  setup(props, { emit }) {
    const showBrushPopover = ref(false);
    const handleSave = () => {
      emit("on-save");
    };
    const handleText = () => {
      emit("update:editState", "Text");
    };
    const handlePaint = () => {
      emit("update:editState", "Paint");
    };
    return {
      handleSave,
      handleText,
      handlePaint,
      showBrushPopover
    };
  }
});
</script>
<style lang="css" scoped>
.tools-box {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-modal);
  align-items: center;
  height: 50px;
  padding: 0 20px;
}
.icon-btn {
  border-radius: 5px;
  background-color: #aaa;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  cursor: pointer;
}

.canvas-btn {
  width: 40px;
}

.down-icon {
  margin-left: 5px;
  display: none;
}

.icon-btn:hover {
  background-color: #999;
}
.icon-btn.active {
  background-color: var(--color-target);
  cursor: default;
}
.icon-btn.active .down-icon {
  display: inline;
  cursor: pointer;
}
</style>
