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
    <div class="pdf-grid">
      <template v-if="loading">
        <n-skeleton text :repeat="2" /> <n-skeleton text style="width: 60%" />
      </template>
      <template v-else>
        <n-badge
          v-for="item in pagedTable"
          :key="item.id"
          dot
          type="warning"
          :show="item.annotation"
        >
          <n-card size="small" hoverable @click="handelDetail(item)">
            <template #header>
              <n-ellipsis style="max-width: 200px"
                >{{ item.name }}
                <template #tooltip>
                  <div style="text-align: center">
                    {{ item.name }}
                  </div>
                </template>
              </n-ellipsis>
            </template>
            <template #cover>
              <img :src="item.cover" />
            </template>
            <n-time :time="new Date(item.createTime)" />
          </n-card>
        </n-badge>
      </template>
    </div>
  </imp-page-container>
  <upload-modal ref="UploadModalRef" @load-page="loadPage()"></upload-modal>
</template>
<script lang="ts">
import {
  NButton,
  NSpace,
  NInputGroup,
  NInput,
  NIcon,
  NCard,
  NTime,
  NEllipsis,
  NBadge,
  NSkeleton
} from "naive-ui";
import { SearchOutline as SearchOutlineIcon } from "@vicons/ionicons5";
import { defineComponent, onMounted, ref } from "vue";
import { adminPdfPageReq } from "/@/api/Admin/Pdf";
import UploadModal from "./UploadModal.vue";
import { useImpRoute } from "/@/hooks/useRoute";
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
    NCard,
    NTime,
    NEllipsis,
    NBadge,
    NSkeleton,

    SearchOutlineIcon,
    UploadModal
  },
  setup() {
    const { pushPath } = useImpRoute();
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
    const handelDetail = (row: IObj) => {
      pushPath(`/center/my/pdf-detail/${row.id}`);
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
      handelDetail,
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
.pdf-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
}
</style>
