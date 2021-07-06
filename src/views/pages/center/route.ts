import { myRoute } from "./my/route";
import { CENTER_NAME } from "/@/router/constant";
import { AppRouteRecordRaw } from "/@/router/types";
import { authMetaFunc } from "/@/utils/route";

export const CenterRoute: AppRouteRecordRaw = {
  path: "/center",
  name: CENTER_NAME,
  component: () => import("/@/views/layouts/center/index.vue"),
  redirect: "/center/index",
  meta: authMetaFunc("首页"),
  children: [
    {
      path: "index",
      name: CENTER_NAME,
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
