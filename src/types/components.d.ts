/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import { RouterLink, RouterView } from "vue-router";
import PageContainer from "/@/components/common/PageContainer.vue";
declare module "*.vue" {
  export interface GlobalComponents {
    RouterLink: typeof RouterLink;
    RouterView: typeof RouterView;
    PageContainer: typeof PageContainer;
  }
}

export {};
