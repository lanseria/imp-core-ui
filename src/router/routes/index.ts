import type { AppRouteRecordRaw } from "/@/router/types";

import { PAGE_NOT_FOUND_ROUTE } from "/@/router/routes/basic";

import { PageEnum } from "/@/enums/pageEnum";
import { CenterRoute } from "/@/views/pages/center/route";
import { LOGIN_NAME, REGISTER_NAME, ROOT_NAME } from "../constant";
import { noAuthMetaFunc } from "/@/utils/route";

export const RootRoute: AppRouteRecordRaw = {
  path: "/",
  name: ROOT_NAME,
  redirect: PageEnum.BASE_HOME,
  meta: noAuthMetaFunc(ROOT_NAME)
};

export const LoginRoute: AppRouteRecordRaw = {
  path: "/login",
  name: LOGIN_NAME,
  component: () => import("/@/views/pages/login/Layout.vue"),
  redirect: "/login/index",
  meta: noAuthMetaFunc(LOGIN_NAME),
  children: [
    {
      path: "index",
      name: LOGIN_NAME,
      component: () => import("/@/views/pages/login/Login.vue"),
      meta: noAuthMetaFunc(LOGIN_NAME)
    },
    {
      path: "register",
      name: REGISTER_NAME,
      component: () => import("/@/views/pages/login/Register.vue"),
      meta: noAuthMetaFunc(REGISTER_NAME)
    }
  ]
};

// Basic routing without permission
export const basicRoutes = [
  LoginRoute,
  CenterRoute,
  RootRoute,
  PAGE_NOT_FOUND_ROUTE
];
