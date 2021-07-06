<template>
  <n-modal
    preset="card"
    :style="bodyStyle"
    :title="title"
    v-model:show="showModal"
  >
    <template #header-extra>
      <slot name="header-extra"></slot>
    </template>
    <slot></slot>
    <template #footer>
      <slot name="footer"></slot>
    </template>
  </n-modal>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { NModal } from "naive-ui";
export default defineComponent({
  name: "ImpModal",
  props: {
    title: {
      type: String,
      required: true
    }
  },
  components: {
    NModal
  },
  setup() {
    const showModal = ref(false);

    return {
      bodyStyle: {
        width: "600px"
      },
      showModal
    };
  }
});
</script>
