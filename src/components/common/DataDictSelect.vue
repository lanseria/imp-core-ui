<template>
  <n-select v-bind="$attrs" :options="options" />
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { NSelect } from "naive-ui";
import { useUserStore } from "/@/store/modules/user";
export default defineComponent({
  name: "DataDictSelect",
  props: {
    dictName: {
      type: String,
      required: true
    },
    disabledIds: {
      type: Array,
      default: () => []
    }
  },
  components: {
    NSelect
  },
  setup(props) {
    // computed
    const options = computed(() => {
      const userStore = useUserStore();
      const dataDict = userStore.dataDict;
      const currentDataDict = dataDict.has(props.dictName)
        ? // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          dataDict.get(props.dictName)!
        : [];
      return currentDataDict.map(dict => {
        return {
          ...dict,
          disabled: props.disabledIds.includes(dict.value)
        };
      });
    });
    return {
      options
    };
  }
});
</script>
