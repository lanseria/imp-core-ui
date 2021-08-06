<template>
  <div v-if="isAnnotate" class="tools-box">
    <n-space>
      <div
        class="brush-btn icon-btn canvas-btn"
        :class="{ active: editState === 'Paint' }"
        @click="handlePaint()"
      >
        <n-icon size="15">
          <BrushSharpIcon />
        </n-icon>
        <n-popover trigger="manual" placement="bottom" :show="showBrushPopover">
          <template #trigger>
            <n-icon
              size="10"
              class="down-icon"
              @click="showBrushPopover = !showBrushPopover"
            >
              <CaretDownIcon /> </n-icon
          ></template>
          <span>Stroke</span>
        </n-popover>
      </div>
      <div
        class="text-btn icon-btn canvas-btn"
        :class="{ active: editState === 'Text' }"
        @click="handleText()"
      >
        <n-icon size="15">
          <TextIcon />
        </n-icon>
        <n-icon size="10" class="down-icon">
          <CaretDownIcon />
        </n-icon>
      </div>
      <div class="icon-btn" @click="handleSave()">
        <n-icon size="15">
          <SaveOutlineIcon />
        </n-icon>
      </div>
    </n-space>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { NIcon, NSpace, NPopover } from "naive-ui";
import {
  BrushSharp as BrushSharpIcon,
  Text as TextIcon,
  SaveOutline as SaveOutlineIcon,
  CaretDown as CaretDownIcon
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
    NPopover,

    BrushSharpIcon,
    TextIcon,
    SaveOutlineIcon,
    CaretDownIcon
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
  background: var(--color-popover);
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
