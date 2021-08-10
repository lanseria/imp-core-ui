<template>
  <n-layout-sider
    :native-scrollbar="false"
    :collapsed-width="0"
    collapse-mode="transform"
    bordered
    show-trigger="bar"
    :width="350"
    style="background: var(--color-popover)"
  >
    <div></div>
    <n-h6 prefix="bar">我的批注</n-h6>
    <n-list bordered>
      <n-list-item v-for="item in annotateList" :key="item.relationId">
        <template #prefix>
          <img style="background: #fff" width="40" :src="item.content" />
        </template>
        <template #suffix>
          <n-space>
            <n-time :time="new Date(item.createTime)" format="hh:mm:ss" />
            <n-dropdown :options="options">
              <n-button size="small" text>
                <n-icon>
                  <EllipsisVerticalIcon />
                </n-icon>
              </n-button>
            </n-dropdown>
          </n-space>
        </template>
        {{ item.remarks }}
      </n-list-item>
    </n-list>
  </n-layout-sider>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import {
  NSpace,
  NLayoutSider,
  NList,
  NListItem,
  NTime,
  NH6,
  NButton,
  NDropdown,
  NIcon
} from "naive-ui";

import {
  EllipsisVertical as EllipsisVerticalIcon,
  TrashOutline as TrashOutlineIcon
} from "@vicons/ionicons5";
import { renderIcon } from "/@/utils/render";

export default defineComponent({
  components: {
    NSpace,
    NLayoutSider,
    NList,
    NListItem,
    NTime,
    NH6,
    NButton,
    NDropdown,
    NIcon
  },
  props: {
    annotateList: {
      type: Array as PropType<PdfAnnotateVO[]>,
      required: true
    }
  },
  setup() {
    return {
      options: [
        {
          label: "删除",
          key: "delete",
          icon: renderIcon(TrashOutlineIcon)
        }
      ]
    };
  }
});
</script>
