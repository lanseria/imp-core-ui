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
    />
  </imp-page-container>
</template>
<script lang="ts">
import { NDataTable } from "naive-ui";
import { defineComponent, onMounted, reactive, ref } from "vue";
import { adminUserPageReq } from "/@/api/Admin/User";
export default defineComponent({
  components: {
    NDataTable
  },
  setup() {
    const loading = ref(false);
    const pagedTable = ref<AdminUserPageItemVO[]>([]);
    const current = ref(1);
    const size = ref(10);
    const total = ref(0);
    const pagination = reactive({
      page: current,
      itemCount: total,
      pageSize: size
    });
    const loadPage = async () => {
      const { code, msg, data } = await adminUserPageReq({
        current: current.value,
        size: size.value
      });
      if (code) {
        window.$message.warning(msg);
      } else {
        pagedTable.value = data.records;
        current.value = +data.current;
        size.value = +data.size;
        total.value = +data.total;
      }
      console.log(code, msg, data);
    };
    const handlePageChange = async (currentPage: any) => {
      if (!loading.value) {
        loading.value = true;
        console.log(currentPage);
        const { code, msg, data } = await adminUserPageReq({
          current: currentPage,
          size: pagination.pageSize
        });
        pagination.page = +data.current;
        pagination.itemCount = +data.total;
        pagedTable.value = data.records;
        loading.value = false;
      }
    };
    onMounted(() => {
      loadPage();
    });
    return {
      loading,
      columns: [
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
        }
      ],
      pagedTable,
      pagination,
      // method
      handlePageChange
    };
  }
});
</script>
