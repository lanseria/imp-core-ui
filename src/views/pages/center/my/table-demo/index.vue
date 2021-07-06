<template>
  <imp-page-container>
    <n-data-table
      remote
      :loading="loading"
      :paging="false"
      :columns="columns"
      :data="pagedTable"
      :pagination="pagination"
      @update:page="handlePageChange"
      @update:page-size="handlePageSizeChange"
    />
  </imp-page-container>
</template>
<script lang="ts">
import { NDataTable, NButton, NSpace } from "naive-ui";
import { TableColumn } from "naive-ui/lib/data-table/src/interface";
import { defineComponent, onMounted, reactive, ref, h } from "vue";
import { adminUserPageReq } from "/@/api/Admin/User";
class PaginationDTO {
  page = 1;
  itemCount?: number = undefined;
  pageSize = 10;
  pageSizes = [10, 20, 30];
  showSizePicker = true;
}
export default defineComponent({
  components: {
    NDataTable
  },
  setup() {
    const loading = ref(false);
    const pagedTable = ref<AdminUserPageItemVO[]>([]);
    const pagination = reactive(new PaginationDTO());
    const loadPage = async (
      params = {
        current: pagination.page,
        size: pagination.pageSize
      }
    ) => {
      if (!loading.value) {
        loading.value = true;
        const { code, msg, data } = await adminUserPageReq(params);
        if (code) {
          window.$message.warning(msg);
        } else {
          pagedTable.value = data.records;
          pagination.page = +data.current;
          pagination.pageSize = +data.size;
          pagination.itemCount = +data.total;
        }
        console.log(code, msg, data);
        loading.value = false;
      }
    };
    const handlePageChange = async (currentPage: any) => {
      loadPage({
        current: currentPage,
        size: pagination.pageSize
      });
    };
    const handlePageSizeChange = async (currentPageSize: any) => {
      loadPage({
        current: 1,
        size: currentPageSize
      });
    };
    const sendMail = (row: any) => {
      console.log(row);
    };
    onMounted(() => {
      loadPage();
    });
    const columns: TableColumn[] = [
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
      {
        title: "操作",
        key: "actions",
        width: 200,
        fixed: "right",
        render(row) {
          return h(NSpace, null, {
            default: () => [
              h(
                NButton,
                {
                  type: "primary",
                  onClick: () => sendMail(row)
                },
                { default: () => "编辑" }
              ),
              h(
                NButton,
                {
                  onClick: () => sendMail(row)
                },
                { default: () => "删除" }
              )
            ]
          });
        }
      }
    ];
    return {
      loading,
      columns,
      pagedTable,
      pagination,
      // method
      handlePageChange,
      handlePageSizeChange
    };
  }
});
</script>
