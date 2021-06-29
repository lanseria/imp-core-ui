<template>
  <img :src="codeSrc" alt="验证码" @click="refreshCode" />
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import { useAppStore } from "/@/store/modules/app";
import { randomLenNum } from "/@/utils/random";
const CodeImg = defineComponent({
  emits: ["refresh"],
  setup(props, { emit }) {
    // use
    const appStore = useAppStore();
    // ref
    const codeSrc = ref("");
    const randomStr = ref("");
    // computed
    const invertValue = computed(() => {
      return appStore.getTheme === "dark" ? 0.84 : 0;
    });
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
      // computed
      invertValue,
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
  filter: invert(v-bind(invertValue));
}
</style>
