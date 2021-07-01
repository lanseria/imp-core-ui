import { myRoute } from "./my/route";
import { AppRouteRecordRaw } from "/@/router/types";
import { authMetaFunc } from "/@/utils/route";

export const CenterRoute: AppRouteRecordRaw = {
  path: "/center",
  name: "Center",
  component: () => import("/@/views/layouts/center/index.vue"),
  redirect: "/center/index",
  meta: authMetaFunc("首页"),
  children: [
    {
      path: "index",
      name: "Center",
      component: () => import("./index.vue"),
      meta: authMetaFunc("首页")
    },
    {
      path: "my",
      name: "My",
      redirect: "/center/my/base",
      component: () => import("./my/Layout.vue"),
      children: myRoute,
      meta: authMetaFunc("我的")
    }
  ]
};
