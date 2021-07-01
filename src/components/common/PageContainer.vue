<template>
  <n-card>
    <n-page-header :title="title" @back="goBack">
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
  name: "PageContainer",
  props: {
    isBack: {
      type: Boolean,
      default: false
    }
  },
  components: {
    NPageHeader,
    NCard
  },
  setup(props) {
    const { goBack, crtMeta } = useImpRoute();
    // computed
    const title = computed(() => {
      return crtMeta.value.title;
    });
    return {
      // computed
      title,
      // method
      goBack: props.isBack ? goBack : undefined
    };
  }
});
</script>
