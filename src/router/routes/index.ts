import type { AppRouteRecordRaw } from "/@/router/types";

import { PAGE_NOT_FOUND_ROUTE, REDIRECT_ROUTE } from "/@/router/routes/basic";

import { PageEnum } from "/@/enums/pageEnum";
import { CenterRoute } from "/@/views/pages/center/route";
import {
  DASHBOARD_NAME,
  LOGIN_NAME,
  REGISTER_NAME,
  ROOT_NAME
} from "../constant";

export const RootRoute: AppRouteRecordRaw = {
  path: "/",
  name: ROOT_NAME,
  redirect: PageEnum.BASE_HOME,
  meta: {
    title: ROOT_NAME,
    isAuth: false
  }
};

export const LoginRoute: AppRouteRecordRaw = {
  path: "/login",
  name: LOGIN_NAME,
  component: () => import("/@/views/pages/login/Layout.vue"),
  redirect: "/login/index",
  meta: {
    title: "登录",
    isAuth: false
  },
  children: [
    {
      path: "index",
      name: LOGIN_NAME,
      component: () => import("/@/views/pages/login/Login.vue"),
      meta: {
        title: "登录",
        isAuth: false
      }
    },
    {
      path: "register",
      name: REGISTER_NAME,
      component: () => import("/@/views/pages/login/Register.vue"),
      meta: {
        title: "注册",
        isAuth: false
      }
    }
  ]
};

export const DashboardRoute: AppRouteRecordRaw = {
  path: "/dashboard",
  name: DASHBOARD_NAME,
  component: () => import("/@/views/layouts/dashboard/index.vue"),
  redirect: "/dashboard/index",
  meta: {
    title: "赋能台",
    isAuth: true
  },
  children: [
    {
      path: "index",
      name: DASHBOARD_NAME,
      component: () => import("/@/views/pages/dashboard/index.vue"),
      meta: {
        title: "赋能台",
        isAuth: true
      }
    }
  ]
};

// Basic routing without permission
export const basicRoutes = [
  LoginRoute,
  DashboardRoute,
  CenterRoute,
  RootRoute,
  REDIRECT_ROUTE,
  PAGE_NOT_FOUND_ROUTE
];
