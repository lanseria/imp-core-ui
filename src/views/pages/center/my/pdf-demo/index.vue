<template>
  <imp-page-container>
    <div class="data-table-header">
      <n-space>
        <n-button type="primary" @click="handleAdd()">上传文件</n-button>
      </n-space>
      <n-space>
        <n-input-group>
          <n-input v-model:value="searchName" clearable>
            <template #prefix>
              <n-icon>
                <search-outline-icon />
              </n-icon>
            </template>
          </n-input>
          <n-button type="primary" ghost @click="handleSearch()">搜索</n-button>
        </n-input-group>
      </n-space>
    </div>
  </imp-page-container>
  <upload-modal ref="UploadModalRef" @load-page="loadPage()"></upload-modal>
</template>
<script lang="ts">
import { NButton, NSpace, NInputGroup, NInput, NIcon } from "naive-ui";
import { SearchOutline as SearchOutlineIcon } from "@vicons/ionicons5";
import { defineComponent, onMounted, ref } from "vue";
import { adminPdfPageReq } from "/@/api/Admin/Pdf";
import UploadModal from "./UploadModal.vue";
class PaginationDTO {
  page = 1;
  pageSize = 10;
  pageCount = 1;
  showSizePicker = true;
}
export default defineComponent({
  components: {
    NButton,
    NSpace,
    NInputGroup,
    NInput,
    NIcon,
    SearchOutlineIcon,
    UploadModal
  },
  setup() {
    // ref
    const loading = ref(false);
    const searchName = ref("");
    const pagedTable = ref<IObj[]>([]);
    const pagination = ref(new PaginationDTO());
    // refs
    const UploadModalRef = ref();
    // method
    const loadPage = async (
      params: IObj = {
        current: pagination.value.page,
        size: pagination.value.pageSize
      }
    ) => {
      if (!loading.value) {
        loading.value = true;
        const { code, msg, data } = await adminPdfPageReq(params);
        if (code) {
          window.$message.warning(msg);
        } else {
          pagedTable.value = data.records;
          pagination.value.page = +data.current;
          pagination.value.pageCount = +data.pages;
        }
        loading.value = false;
      }
    };
    const handleAdd = () => {
      UploadModalRef.value.open();
    };
    const handleSearch = () => {
      loadPage({
        current: 1,
        size: pagination.value.pageSize,
        realName: searchName.value
      });
    };
    const handlePageChange = async (currentPage: number) => {
      loadPage({
        current: currentPage,
        size: pagination.value.pageSize
      });
    };
    const handlePageSizeChange = async (currentPageSize: number) => {
      loadPage({
        current: 1,
        size: currentPageSize
      });
    };

    onMounted(() => {
      loadPage();
    });
    return {
      // ref
      searchName,
      pagedTable,
      loading,
      pagination,
      // refs
      UploadModalRef,
      // method
      loadPage,
      handleAdd,
      handleSearch,
      handlePageChange,
      handlePageSizeChange
    };
  }
});
</script>

<style lang="css" scoped>
.data-table-header {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}
</style>
