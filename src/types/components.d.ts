/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import { RouterLink, RouterView } from "vue-router";
import ImpPageContainer from "/@/components/global/ImpPageContainer.vue";
declare module "*.vue" {
  export interface GlobalComponents {
    RouterLink: typeof RouterLink;
    RouterView: typeof RouterView;
    ImpPageContainer: typeof ImpPageContainer;
  }
}

export {};
