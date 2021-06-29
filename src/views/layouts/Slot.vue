<template>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useMessage, useNotification } from "naive-ui";
export default defineComponent({
  setup() {
    window.$message = useMessage();
    window.$notification = useNotification();
    return {};
  }
});
</script>
