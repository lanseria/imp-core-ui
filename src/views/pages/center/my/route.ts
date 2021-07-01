import { AppRouteRecordRaw } from "/@/router/types";
import { authMetaFunc } from "/@/utils/route";

export const myRoute: AppRouteRecordRaw[] = [
  {
    path: "base",
    name: "Base",
    meta: authMetaFunc("基本信息", {
      icon: "el-icon-iep-gerenziliao"
    }),
    component: () => import(/* webpackChunkName: "page" */ "./base/index.vue")
  },
  {
    path: "more",
    name: "More",
    meta: authMetaFunc("更多信息", {
      icon: "el-icon-iep-more-info"
    }),
    component: () => import(/* webpackChunkName: "page" */ "./more/index.vue")
  },
  {
    path: "security",
    name: "Security",
    meta: authMetaFunc("安全设置", {
      icon: "el-icon-iep-yanzhengma"
    }),
    component: () =>
      import(/* webpackChunkName: "page" */ "./security/index.vue")
  },
  {
    path: "account",
    name: "Account",
    meta: authMetaFunc("账号关联", {
      icon: "el-icon-iep-guanlian"
    }),
    component: () =>
      import(/* webpackChunkName: "page" */ "./account/index.vue")
  }
];
