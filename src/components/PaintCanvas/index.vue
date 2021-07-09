<template>
  <div class="canvas-container">
    <pan-list></pan-list>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import PanList from "./PanList.vue";
export default defineComponent({
  components: {
    PanList
  },
  setup() {
    return {};
  }
});
</script>
<style lang="css" scoped>
.canvas-container {
  position: relative;
  width: 100%;
  height: calc(100vh - 183px);
  background: rgb(227 247 255 / 50%);
  background-image: repeating-linear-gradient(
    90deg,
    hsl(0deg 0% 100% / 50%),
    hsla(0, 0%, 100%, 0.5) 15px,
    transparent 0,
    transparent 30px
  );
}
</style>
