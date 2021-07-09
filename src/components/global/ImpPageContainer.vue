<template>
  <n-card>
    <n-page-header :title="pageTitle" @back="goBack">
      <template #avatar>
        <slot name="avatar"></slot>
      </template>
      <template #extra>
        <slot name="extra"></slot>
      </template>
    </n-page-header>
    <slot></slot>
  </n-card>
</template>
<script lang="ts">
import { NPageHeader, NCard } from "naive-ui";
import { computed, defineComponent } from "vue";
import { useImpRoute } from "/@/hooks/useRoute";
export default defineComponent({
  name: "ImpPageContainer",
  props: {
    isBack: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    }
  },
  components: {
    NPageHeader,
    NCard
  },
  setup(props) {
    const { goBack, crtMeta } = useImpRoute();
    // computed
    const pageTitle = computed(() => {
      return props.title || crtMeta.value.title;
    });
    return {
      // computed
      pageTitle,
      // method
      goBack: props.isBack ? goBack : undefined
    };
  }
});
</script>
