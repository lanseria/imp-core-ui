<template>
  <imp-page-container>
    <div class="data-table-header">
      <n-space>
        <n-button type="primary" @click="handleAdd()">新增</n-button>
        <n-button>导出</n-button>
        <n-button>删除</n-button>
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
    <n-data-table
      remote
      :loading="loading"
      :columns="columns"
      :data="pagedTable"
      :pagination="pagination"
      :row-key="row => row.userId"
      @update:page="handlePageChange"
      @update:page-size="handlePageSizeChange"
    />
  </imp-page-container>
  <form-modal ref="FormModalRef"></form-modal>
</template>
<script lang="ts">
import {
  NDataTable,
  NButton,
  NSpace,
  NInputGroup,
  NInput,
  NIcon
} from "naive-ui";
import { TableColumn } from "naive-ui/lib/data-table/src/interface";
import { defineComponent, onMounted, ref } from "vue";
import { operateColums, OptList } from "./Actions";
import { SearchOutline as SearchOutlineIcon } from "@vicons/ionicons5";
import { adminUserPageReq } from "/@/api/Admin/User";
import FormModal from "./FormModal.vue";
class PaginationDTO {
  page = 1;
  itemCount?: number = undefined;
  pageSize = 10;
  pageSizes = [10, 20, 30];
  showSizePicker = true;
}
export default defineComponent({
  components: {
    NDataTable,
    NSpace,
    NButton,
    NInputGroup,
    NInput,
    NIcon,
    SearchOutlineIcon,
    FormModal
  },
  setup() {
    // refs
    const FormModalRef = ref();
    // ref
    const loading = ref(false);
    const searchName = ref("");
    const pagedTable = ref<AdminUserPageItemVO[]>([]);
    const pagination = ref(new PaginationDTO());
    // method
    const loadPage = async (
      params: IObj = {
        current: pagination.value.page,
        size: pagination.value.pageSize
      }
    ) => {
      if (!loading.value) {
        loading.value = true;
        const { code, msg, data } = await adminUserPageReq(params);
        if (code) {
          window.$message.warning(msg);
        } else {
          pagedTable.value = data.records;
          pagination.value.page = +data.current;
          pagination.value.pageSize = +data.size;
          pagination.value.itemCount = +data.total;
        }
        console.log(code, msg, data);
        loading.value = false;
      }
    };
    const handleSearch = () => {
      loadPage({
        current: 1,
        size: pagination.value.pageSize,
        realName: searchName.value
      });
    };
    const handlePageChange = async (currentPage: any) => {
      loadPage({
        current: currentPage,
        size: pagination.value.pageSize
      });
    };
    const handlePageSizeChange = async (currentPageSize: any) => {
      loadPage({
        current: 1,
        size: currentPageSize
      });
    };
    const handleAdd = () => {
      FormModalRef.value.open();
    };
    const handleEdit = (row: IObj) => {
      FormModalRef.value.open(row);
    };
    const handleDel = (row: IObj) => {
      console.log(row);
    };

    onMounted(() => {
      loadPage();
    });

    const operateOptions: OptList[] = [
      {
        name: "编辑",
        func: handleEdit
      },
      {
        name: "删除",
        func: handleDel
      }
    ];
    const columns: TableColumn[] = [
      {
        type: "selection"
      },
      {
        title: "用户名",
        key: "username"
      },
      {
        title: "真实姓名",
        key: "realName"
      },
      {
        title: "手机",
        key: "phone"
      },
      operateColums(operateOptions)
    ];
    return {
      // refs
      FormModalRef,
      // ref
      searchName,
      loading,
      columns,
      pagedTable,
      pagination,
      // method
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
