<template>
  <n-card>
    <PdfAnnotate
      v-if="loadding"
      :src="modelRef.previewUrl"
      :name="modelRef.name"
      :annotate-list="annotateList"
      @get-annotate="handleGetAnnotate"
      @create-annotate="handleCreateAnnotate"
    ></PdfAnnotate>
  </n-card>
</template>
<script lang="ts">
import { NCard } from "naive-ui";
import { computed, defineComponent, onMounted, ref } from "vue";
import {
  // adminPdfContentByIdReq,
  adminPdfDetailByIdReq,
  adminPdfAnnotateByIdReq,
  adminPdfAnnotateCreateReq
} from "/@/api/Admin/Pdf";
import PdfAnnotate from "/@/components/PdfAnnotate/index.vue";
import { PdfPageDTO } from "/@/types/Admin/Pdf/dto";
export default defineComponent({
  props: ["id"],
  components: {
    PdfAnnotate,
    NCard
  },
  setup(props) {
    const modelRef = ref(new PdfPageDTO());
    const annotateList = ref<PdfAnnotateVO[]>([]);
    const loadding = ref(false);
    // computed
    const src = computed(() => {
      return `/api/admin/pdf/page/content?id=${modelRef.value.id}&current=${modelRef.value.pageNumber}`;
    });
    const handleGetAnnotate = async (
      current: number = modelRef.value.pageNumber
    ) => {
      const { data } = await adminPdfAnnotateByIdReq({
        id: modelRef.value.id,
        current
      });
      annotateList.value = data;
    };
    const handleCreateAnnotate = async (obj: IObj) => {
      const { data } = await adminPdfAnnotateCreateReq({
        relationId: modelRef.value.id,
        ...obj
      });
      if (data) {
        window.$message.success("创建批注成功");
      }
      modelRef.value.pageNumber = obj.pageNumber;
      handleGetAnnotate();
    };
    // const loadBuf = async () => {
    //   adminPdfContentByIdReq({
    //     id: props.id,
    //     current: modelRef.value.pageNumber
    //   });
    // };
    const loadDetail = async () => {
      loadding.value = false;
      const { data } = await adminPdfDetailByIdReq(props.id);
      modelRef.value = data;
      // loadBuf();
      loadding.value = true;
    };
    const loadPage = () => {
      loadDetail();
    };
    onMounted(() => {
      loadPage();
    });
    return {
      modelRef,
      annotateList,
      loadding,
      src,
      handleGetAnnotate,
      handleCreateAnnotate
    };
  }
});
</script>
