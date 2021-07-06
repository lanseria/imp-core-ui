<template>
  <img :src="src" :alt="alt" :width="width" :height="height" />
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ImpImage",
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ""
    },
    height: {
      type: [String, Number],
      default: 100
    },
    width: {
      type: [String, Number],
      default: 100
    }
  },
  setup() {
    return {};
  }
});
</script>
