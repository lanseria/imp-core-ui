<template>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useMessage, useNotification, useDialog } from "naive-ui";
export default defineComponent({
  setup() {
    window.$message = useMessage();
    window.$notification = useNotification();
    window.$dialog = useDialog();
    return {};
  }
});
</script>
