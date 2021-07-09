<template>
  <imp-page-container title="赋能台">
    <paint-canvas class="paint-canvas"></paint-canvas>
  </imp-page-container>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import PaintCanvas from "/@/components/PaintCanvas/index.vue";
export default defineComponent({
  components: {
    PaintCanvas
  },
  setup() {
    return {};
  }
});
</script>
<style lang="css" scoped>
.paint-canvas {
  margin-top: 10px;
}
</style>
