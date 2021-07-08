import type { AppRouteRecordRaw } from "/@/router/types";
import { ERROR_NAME, LAYOUT, EXCEPTION_COMPONENT } from "/@/router/constant";
import { noAuthMetaFunc } from "/@/utils/route";

// 404 on a page
export const PAGE_NOT_FOUND_ROUTE: AppRouteRecordRaw = {
  path: "/:path(.*)*",
  name: ERROR_NAME,
  component: LAYOUT,
  meta: noAuthMetaFunc(ERROR_NAME),
  children: [
    {
      path: "/:path(.*)*",
      name: ERROR_NAME,
      component: EXCEPTION_COMPONENT,
      meta: noAuthMetaFunc(ERROR_NAME)
    }
  ]
};
