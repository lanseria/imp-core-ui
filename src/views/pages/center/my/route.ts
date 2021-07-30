import { AppRouteRecordRaw } from "/@/router/types";
import { authMetaFunc } from "/@/utils/route";

export const myRoute: AppRouteRecordRaw[] = [
  {
    path: "base",
    name: "Base",
    meta: authMetaFunc("基本信息", {
      icon: "icon-Shape"
    }),
    component: () => import("./base/index.vue")
  },
  {
    path: "more",
    name: "More",
    meta: authMetaFunc("更多信息", {
      icon: "icon-gengduoziliao"
    }),
    component: () => import("./more/index.vue")
  },
  {
    path: "security",
    name: "Security",
    meta: authMetaFunc("安全设置", {
      icon: "icon-yanzhengma"
    }),
    component: () => import("./security/index.vue")
  },
  {
    path: "account",
    name: "Account",
    meta: authMetaFunc("账号关联", {
      icon: "icon-guanlian"
    }),
    component: () => import("./account/index.vue")
  },
  {
    path: "table-demo",
    name: "TableDemo",
    meta: authMetaFunc("用户管理(Table)", {
      icon: "icon-guanlian"
    }),
    component: () => import("./table-demo/index.vue")
  },
  {
    path: "pdf-demo",
    name: "PdfDemo",
    meta: authMetaFunc("会议批注(PDF)", {
      icon: "icon-guanlian"
    }),
    component: () => import("./pdf-demo/index.vue")
  },
  {
    path: "pdf-detail/:id",
    name: "PdfDetail",
    meta: authMetaFunc("会议批注详情(PDF)", {
      icon: "icon-guanlian",
      hidden: true
    }),
    component: () => import("./pdf-demo/Detail.vue")
  }
];
