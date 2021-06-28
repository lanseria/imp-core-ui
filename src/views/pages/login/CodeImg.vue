<template>
  <img :src="codeSrc" alt="验证码" @click="refreshCode" />
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { randomLenNum } from "/@/utils/random";
const CodeImg = defineComponent({
  emits: ["refresh"],
  setup(props, { emit }) {
    // ref
    const codeSrc = ref("");
    const randomStr = ref("");
    // methods
    const refreshCode = () => {
      randomStr.value = randomLenNum();
      codeSrc.value = `/api/code?randomStr=${randomStr.value}`;
      emit("refresh", randomStr.value);
    };
    onMounted(() => {
      refreshCode();
    });
    return {
      // ref
      codeSrc,
      // methods
      refreshCode
    };
  }
});
export default CodeImg;
export type CodeImgRefs = InstanceType<typeof CodeImg>;
</script>
<style lang="css" scoped>
img {
  height: 30px;
  cursor: pointer;
}
</style>
