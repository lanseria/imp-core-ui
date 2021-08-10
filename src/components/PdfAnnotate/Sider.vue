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
      <n-list-item v-for="item in annotateList" :key="item.id">
        <template #prefix>
          <img style="background: #fff" width="40" :src="item.content" />
        </template>
        <template #suffix>
          <n-space :wrap="false" align="center">
            <n-time :time="new Date(item.createTime)" format="hh:mm:ss" />
            <n-dropdown :options="options" @select="handleSelect(item, $event)">
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
import { useIepOperate } from "/@/hooks/useOperate";
import { adminPdfAnnotationDeleteByIdReq } from "/@/api/Admin/Pdf";
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
    NIcon,
    EllipsisVerticalIcon
  },
  props: {
    annotateList: {
      type: Array as PropType<PdfAnnotateVO[]>,
      required: true
    }
  },
  emits: ["load-page"],
  setup(props, { emit }) {
    const { handleIepOperate } = useIepOperate();
    const loadPage = () => {
      emit("load-page");
    };
    const handleSelect = (item: IObj, key: string) => {
      if (key === "delete") {
        handleIepOperate(
          item.id,
          adminPdfAnnotationDeleteByIdReq,
          loadPage,
          "删除"
        );
      }
    };
    return {
      options: [
        {
          label: "删除",
          key: "delete",
          icon: renderIcon(TrashOutlineIcon)
        }
      ],
      handleSelect
    };
  }
});
</script>
