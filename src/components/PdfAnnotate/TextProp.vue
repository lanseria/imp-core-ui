<template>
  <n-space class="property">
    <n-popselect
      v-model:value="colorValue"
      :options="options"
      trigger="click"
      @update:value="handleUpdateColor"
    >
      <n-button size="small" :color="textState.color">
        <template #icon>
          <n-icon>
            <RadioButtonOnIcon />
          </n-icon>
        </template>
        {{ textState.color }}
      </n-button>
    </n-popselect>
    <n-popover trigger="click" :width="200" placement="bottom">
      <template #trigger>
        <n-button size="small">
          <template #icon>
            <n-icon>
              <BrushOutlineIcon />
            </n-icon>
          </template>
          {{ textState.size }}px
        </n-button>
      </template>
      <n-slider
        v-model:value="sizeValue"
        :step="1"
        :max="32"
        :min="1"
        :format-tooltip="value => `${value}px`"
        @update:value="handleUpdateSize"
      />
    </n-popover>
  </n-space>
</template>
<script lang="ts">
import {
  NButton,
  NIcon,
  NSpace,
  NPopover,
  NSlider,
  NPopselect
} from "naive-ui";
import {
  RadioButtonOn as RadioButtonOnIcon,
  BrushOutline as BrushOutlineIcon
} from "@vicons/ionicons5";
import { defineComponent, ref, PropType } from "vue";
export default defineComponent({
  components: {
    NButton,
    NSpace,
    NIcon,
    NPopover,
    NSlider,
    NPopselect,

    RadioButtonOnIcon,
    BrushOutlineIcon
  },
  emits: ["update:textState"],
  props: {
    textState: {
      type: Object as PropType<PaintState>,
      required: true
    }
  },
  setup(props, { emit }) {
    const sizeValue = ref(props.textState.size);
    const colorValue = ref(props.textState.color);
    const handleUpdateSize = (v: number) => {
      emit("update:textState", {
        size: v,
        color: props.textState.color
      });
    };
    const handleUpdateColor = (v: string) => {
      emit("update:textState", {
        color: v,
        size: props.textState.size
      });
    };
    return {
      sizeValue,
      colorValue,
      handleUpdateSize,
      handleUpdateColor,
      options: [
        {
          label: "黑色",
          value: "#000"
        },
        {
          label: "红色",
          value: "#ff0000"
        },
        {
          label: "绿色",
          value: "#4caf50"
        },
        {
          label: "黄色",
          value: "#ffeb3b"
        },
        {
          label: "蓝色",
          value: "#03a9f4"
        },
        {
          label: "橘色",
          value: "#ff5722"
        },
        {
          label: "灰蓝",
          value: "#607d8b"
        },
        {
          label: "紫色",
          value: "#673ab7"
        },
        {
          label: "棕色",
          value: "#795548"
        }
      ]
    };
  }
});
</script>
