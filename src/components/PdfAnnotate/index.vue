<template>
  <div class="pdf-annotate" ref="PdfAnnotateRef">
    <div class="header-tab">
      <HeaderBox
        :name="name"
        :current="current"
        :total="total"
        :isAnnotate="isAnnotate"
        @update:isAnnotate="v => (isAnnotate = v)"
        @on-page="handlePage"
        @on-fullscreen="fullscreen()"
      ></HeaderBox>
      <ToolsBox
        :isAnnotate="isAnnotate"
        :editState="editState"
        @on-save="handleSave()"
        @update:editState="v => (editState = v)"
      ></ToolsBox>
    </div>
    <div class="viewer-wrap">
      <n-layout has-sider>
        <Sider v-if="isAnnotate" :annotateList="annotateList"></Sider>
        <n-layout-content>
          <div class="render-content" ref="RenderContentRef">
            <template v-if="isAnnotate">
              <Paint
                ref="PaintRef"
                :width="CanvasRef.width"
                :height="CanvasRef.height"
                :enabled="editState === 'Paint'"
              ></Paint>
              <Text
                ref="TextRef"
                :width="CanvasRef.width"
                :height="CanvasRef.height"
                :enabled="editState === 'Text'"
              ></Text>
            </template>
            <img
              v-for="item in annotateList"
              :key="item.relationId"
              style="position: absolute"
              :width="CanvasRef.width"
              :height="CanvasRef.height"
              :src="item.content"
              :alt="item.remarks"
            />
            <canvas ref="CanvasRef" class="pdf-canvas"></canvas>
          </div>
        </n-layout-content>
      </n-layout>
    </div>
  </div>
</template>
<script lang="ts">
import { NLayout, NLayoutContent } from "naive-ui";
import {
  defineComponent,
  onMounted,
  reactive,
  toRefs,
  PropType,
  watchEffect
} from "vue";
import * as pdfjsLib from "pdfjs-dist";
import {
  PDFDocumentProxy,
  PDFPageProxy,
  TypedArray
} from "pdfjs-dist/types/display/api";
import HeaderBox from "./HeaderBox.vue";
import ToolsBox from "./ToolsBox.vue";
import Sider from "./Sider.vue";
import Paint from "./Paint.vue";
import Text from "./Text.vue";
import { postFileUploadAvatarReq } from "/@/api/Admin/File";
pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://unpkg.zhimg.com/pdfjs-dist@2.9.359/build/pdf.worker.min.js";
type EditState = "" | "Paint" | "Text";

export default defineComponent({
  props: {
    src: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    annotateList: {
      type: Array as PropType<PdfAnnotateVO[]>,
      required: true
    }
  },
  emits: ["update-state", "get-annotate", "create-annotate"],
  components: {
    NLayout,
    NLayoutContent,

    HeaderBox,
    ToolsBox,
    Sider,
    Paint,
    Text
  },
  setup(props, { emit }) {
    const state = reactive({
      CanvasRef: {} as HTMLCanvasElement,
      PaintRef: {} as any,
      TextRef: {} as any,
      RenderContentRef: {} as HTMLElement,
      PdfAnnotateRef: {} as HTMLElement,
      loading: false,
      isAnnotate: false,
      current: 1,
      total: 0,
      editState: "" as EditState,
      pdfDoc: {} as PDFDocumentProxy,
      pdfPage: {} as PDFPageProxy,
      info: {
        title: "",
        author: "",
        subject: "",
        keywords: ""
      }
    });
    // method
    /**
     * @description: 检测有没有元素处于全屏状态
     * @return 布尔值
     */
    const isElementFullScreen = () => {
      const fullscreenElement = document.fullscreenElement;
      if (fullscreenElement === null) {
        return false; // 当前没有元素在全屏状态
      } else {
        return true; // 有元素在全屏状态
      }
    };
    const fullscreen = () => {
      if (isElementFullScreen()) {
        document.exitFullscreen();
      } else {
        state.PdfAnnotateRef.requestFullscreen();
      }
    };
    const handleSave = () => {
      const paintContext = state.PaintRef.$el.getContext("2d");
      const textCanvas = state.TextRef.drawTextBoxAndSave();
      paintContext?.drawImage(
        textCanvas,
        state.CanvasRef.width,
        state.CanvasRef.height
      );
      state.PaintRef.$el.toBlob(async (blob: Blob) => {
        const formData = new FormData();
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        formData.append("file", blob, "1.png");
        // const img = window.URL.createObjectURL(blob);
        // console.log(img);
        const { code, msg, data } = await postFileUploadAvatarReq(formData);
        if (code) {
          window.$message.success(msg);
        } else {
          emit("create-annotate", {
            content: data.url,
            pageNumber: state.current
          });
        }
      });
    };

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
    const handlePage = async (page: number) => {
      await getPdfPage(page);
      state.current = page;
      emit("get-annotate", state.current);
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
        emit("get-annotate", state.current);
      }
    };
    onMounted(() => {
      getPdfDoc();
      watchEffect(() => {
        if (state.isAnnotate === false) {
          state.editState = "";
        }
      });
    });
    return {
      fullscreen,
      handleSave,
      handlePage,
      ...toRefs(state)
    };
  }
});
</script>
<style lang="css" scoped>
.pdf-annotate {
  display: flex;
  flex-direction: column;
}
.header-tab {
  display: flex;
  flex: 0 1 0;
  flex-direction: column;
}
.viewer-wrap {
  flex: 1 0 0;
  display: flex;
}
.tools-box {
  display: flex;
}
.viewer-box {
  position: relative;
}
.render-content {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.render-content .pdf-canvas {
  /* box-shadow: 0px 0px 15px 5px #cfcfcf; */
  box-shadow: var(--box-shadow);
}
</style>
