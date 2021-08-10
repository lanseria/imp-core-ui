<template>
  <n-badge dot type="warning" :show="item.annotation">
    <n-card size="small" hoverable>
      <template #header>
        <n-button text @click="handleDetail(item)">
          <n-ellipsis style="max-width: 150px">
            {{ item.name }}
            <template #tooltip>
              <div style="text-align: center">
                {{ item.name }}
              </div>
            </template>
          </n-ellipsis>
        </n-button>
      </template>
      <template #cover>
        <img :src="item.cover" />
      </template>
      <n-space :wrap="false" align="center">
        <n-time :time="new Date(item.createTime)" format="yyyy-MM-dd hh:mm" />
        <n-dropdown :options="options" @select="handleSelect">
          <n-button size="small" text>
            <n-icon>
              <EllipsisVerticalIcon />
            </n-icon>
          </n-button>
        </n-dropdown>
      </n-space>
    </n-card>
  </n-badge>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { useImpRoute } from "/@/hooks/useRoute";
import { renderIcon } from "/@/utils/render";

import {
  NButton,
  NSpace,
  NIcon,
  NCard,
  NTime,
  NEllipsis,
  NBadge,
  NDropdown
} from "naive-ui";
import {
  EllipsisVertical as EllipsisVerticalIcon,
  TrashOutline as TrashOutlineIcon
} from "@vicons/ionicons5";
export default defineComponent({
  props: {
    item: {
      type: Object as PropType<IObj>,
      required: true
    }
  },
  components: {
    NButton,
    NSpace,
    NIcon,
    NCard,
    NTime,
    NEllipsis,
    NBadge,
    NDropdown,

    EllipsisVerticalIcon
  },
  setup() {
    const { pushPath } = useImpRoute();
    const handleDetail = (row: IObj) => {
      pushPath(`/center/my/pdf-detail/${row.id}`);
    };
    const handleSelect = () => {
      //
    };
    return {
      options: [
        {
          label: "删除",
          key: "delete",
          icon: renderIcon(TrashOutlineIcon)
        }
      ],
      handleSelect,
      handleDetail
    };
  }
});
</script>
