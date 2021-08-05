<template>
  <imp-page-container :title="modelRef.name">
    <PdfAnnotate v-if="loadding" :src="modelRef.previewUrl"></PdfAnnotate>
  </imp-page-container>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import {
  adminPdfContentByIdReq,
  adminPdfDetailByIdReq
} from "/@/api/Admin/Pdf";
import PdfAnnotate from "/@/components/common/PdfAnnotate.vue";
class PdfPageDTO {
  cover = "";
  createTime = "";
  delFlag = "0";
  id = 1;
  isComment = "0";
  name = "";
  pageNumber = 1;
  previewUrl = "";
  updateTime = "";
  url = "";
  userId = 1;
}
export default defineComponent({
  props: ["id"],
  components: {
    PdfAnnotate
  },
  setup(props) {
    const modelRef = ref(new PdfPageDTO());
    const loadding = ref(false);
    // computed
    const src = computed(() => {
      return `/api/admin/pdf/page/content?id=${modelRef.value.id}&current=${modelRef.value.pageNumber}`;
    });
    const loadBuf = async () => {
      adminPdfContentByIdReq({
        id: props.id,
        current: modelRef.value.pageNumber
      });
    };
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
      loadding,
      src
    };
  }
});
</script>
