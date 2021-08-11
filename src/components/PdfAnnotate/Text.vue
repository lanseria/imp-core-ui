<template>
  <div class="text-div" :style="{ width: `${width}px`, height: `${height}px` }">
    <TextArea
      v-for="(item, i) in textAreaList"
      :key="item.id"
      :item="item"
      @update-text-list="updateTextList(i, $event)"
      @on-del="handleDel(item.id)"
      @on-insert="handleInsert()"
    ></TextArea>
  </div>
  <canvas ref="TextRef" class="text" :width="width" :height="height"> </canvas>
</template>
<script lang="ts">
import { useMouseInElement, useMousePressed } from "@vueuse/core";
import { nanoid } from "nanoid";
import {
  computed,
  defineComponent,
  onMounted,
  reactive,
  toRefs,
  watch
} from "vue";
import TextArea from "./TextArea.vue";
const Text = defineComponent({
  components: {
    TextArea
  },
  props: {
    width: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      required: true
    },
    enabled: {
      type: Boolean,
      required: true
    },
    fontSize: {
      type: Number,
      default: 14
    },
    fontColor: {
      type: String,
      default: "#000"
    }
  },
  setup(props) {
    const POINTER_HEIGHT = 7;
    const state = reactive({
      TextRef: {} as HTMLCanvasElement,
      ctx: null as CanvasRenderingContext2D | null,
      isSearhing: true,
      textAreaList: [] as TextAreaItemVO[]
    });
    // computed
    const textCursor = computed(() => {
      if (state.isSearhing) {
        return "text";
      } else {
        return "auto";
      }
    });
    // method
    const updateTextList = (i: number, text: string) => {
      state.textAreaList[i].text = text;
    };
    const drawTextBoxAndSave = () => {
      // return state.TextRef.toDataURL("image/png");
      return state.TextRef;
    };
    const handleDel = (id: string) => {
      state.textAreaList = state.textAreaList.filter(m => m.id !== id);
      state.isSearhing = true;
    };
    const handleInsert = () => {
      state.textAreaList.map(m => {
        if (state.ctx) {
          state.ctx.fillStyle = props.fontColor;
          state.ctx.font = `${m.size}px system-ui`;
          // +POINTER_HEIGHT为插入中间值
          state.ctx.fillText(m.text, m.x, m.y + POINTER_HEIGHT);
        }
      });
      state.textAreaList = [];
      state.isSearhing = true;
    };
    // hooks
    onMounted(() => {
      state.ctx = state.TextRef.getContext("2d");
      const { pressed } = useMousePressed();
      const { elementX, elementY, isOutside } = useMouseInElement(
        state.TextRef
      );
      watch(pressed, n => {
        if (n && state.isSearhing && props.enabled && isOutside) {
          state.isSearhing = false;
          state.textAreaList.push({
            id: nanoid(),
            x: elementX.value,
            // -POINTER_HEIGHT为插入中间值
            y: elementY.value - POINTER_HEIGHT,
            text: "",
            size: props.fontSize
          });
        }
      });
    });
    return {
      ...toRefs(state),
      // computed
      textCursor,
      // method
      updateTextList,
      drawTextBoxAndSave,
      handleDel,
      handleInsert
    };
  }
});
export default Text;
export type TextRefs = InstanceType<typeof Text>;
</script>
<style scoped>
.text,
.text-div {
  position: absolute;
  /* cursor: v-bind(textCursor); */
}
.text-div {
  z-index: 1;
}
</style>
