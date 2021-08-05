<template>
  <div class="pdf-annotate">
    <div class="header-tab">
      <div class="header-box">
        <div class="tabs">
          <n-button-group>
            <n-button
              :type="!isAnnotate ? 'primary' : 'default'"
              ghost
              @click="isAnnotate = false"
            >
              阅读模式
            </n-button>
            <n-button
              :type="isAnnotate ? 'primary' : 'default'"
              ghost
              @click="isAnnotate = true"
            >
              批注模式
            </n-button>
          </n-button-group>
        </div>
        <div class="viewer-tools">
          <n-button-group>
            <n-button ghost> 缩放 </n-button>
            <n-button ghost> 关闭 </n-button>
          </n-button-group>
        </div>
      </div>

      <div v-if="isAnnotate" class="tools-box">
        <n-button-group>
          <n-button ghost> 铅笔 </n-button>
          <n-button ghost> 画笔 </n-button>
          <n-button ghost> 记号笔 </n-button>
          <n-button ghost> 颜色 </n-button>
        </n-button-group>
      </div>
    </div>
    <div class="viewer-wrap">
      <div class="viewer-box">
        <div class="render-content" ref="RenderContentRef">
          <slot name="canvas"></slot>
          <canvas ref="CanvasRef"></canvas>
        </div>
      </div>
      <div class="annotate-box"></div>
    </div>
  </div>
</template>
<script lang="ts">
import { NButton, NButtonGroup } from "naive-ui";
import { defineComponent, ref, onMounted, reactive, toRefs } from "vue";
import * as pdfjsLib from "pdfjs-dist";
import {
  PDFDocumentProxy,
  PDFPageProxy,
  TypedArray
} from "pdfjs-dist/types/display/api";
pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://unpkg.zhimg.com/pdfjs-dist@2.9.359/build/pdf.worker.min.js";
export default defineComponent({
  props: {
    src: {
      type: String,
      default: ""
    }
  },
  emits: ["update-state"],
  components: {
    NButton,
    NButtonGroup
  },
  setup(props, { emit }) {
    const state = reactive({
      CanvasRef: {} as HTMLCanvasElement,
      RenderContentRef: {} as HTMLElement,
      loading: false,
      isAnnotate: false,
      current: 1,
      total: 0,
      pdfDoc: {} as PDFDocumentProxy,
      pdfPage: {} as PDFPageProxy,
      info: {
        title: "",
        author: "",
        subject: "",
        keywords: ""
      }
    });
    const getBufferArray = async (src: string) => {
      return (await fetch(src).then(res => res.arrayBuffer())) as TypedArray;
    };
    const render = async () => {
      // Display page on the existing canvas with 100% scale.
      const viewport = state.pdfPage.getViewport({ scale: 1.0 });
      state.CanvasRef.width = viewport.width;
      state.CanvasRef.height = viewport.height;
      const ctx = state.CanvasRef.getContext("2d");
      if (!ctx) {
        return;
      }
      const renderTask = state.pdfPage.render({
        canvasContext: ctx,
        viewport
      });
      await renderTask.promise;
      // emit to parent
      emit("update-state", {
        current: state.current,
        total: state.total,
        viewportWidth: viewport.width,
        viewportHeight: viewport.height
      });
    };
    const getPdfPage = async (crt: number) => {
      console.log(crt);
      state.loading = true;
      if (!state.pdfDoc) {
        return;
      }
      state.pdfPage = await state.pdfDoc.getPage(crt);
      await render();
      state.loading = false;
      state.RenderContentRef.scrollTo({
        top: 0
      });
    };
    const refreshPdfDoc = async (buf: TypedArray) => {
      state.pdfDoc = await pdfjsLib.getDocument(buf as TypedArray).promise;
      state.total = state.pdfDoc.numPages;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { info }: { info: any } = await state.pdfDoc.getMetadata();
      state.info = {
        title: info.Title,
        author: info.Author,
        subject: info.Subject,
        keywords: info.Keywords
      };
      getPdfPage(state.current);
    };
    const getPdfDoc = async () => {
      if (props.src) {
        await refreshPdfDoc(await getBufferArray(props.src));
      }
    };
    onMounted(() => {
      getPdfDoc();
    });
    return {
      ...toRefs(state)
    };
  }
});
</script>
<style lang="css" scoped>
.pdf-annotate {
  background-color: var(--color-modal);
  display: flex;
  flex-direction: column;
}
.header-tab {
  display: flex;
  flex-direction: column;
}
.header-box {
  display: flex;
  justify-content: space-between;
}
.tabs {
  display: flex;
}
.viewer-tools {
  display: flex;
}
.tools-box {
  display: flex;
}
</style>
