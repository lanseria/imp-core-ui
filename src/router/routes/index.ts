import type { AppRouteRecordRaw, AppRouteModule } from "/@/router/types";

import { PAGE_NOT_FOUND_ROUTE, REDIRECT_ROUTE } from "/@/router/routes/basic";

import { PageEnum } from "/@/enums/pageEnum";
import { CenterRoute } from "/@/views/pages/center/route";

// const modules = import.meta.globEager("./modules/**/*.ts");

const routeModuleList: AppRouteModule[] = [];

// Object.keys(modules).forEach(key => {
//   const mod = modules[key].default || {};
//   const modList = Array.isArray(mod) ? [...mod] : [mod];
//   routeModuleList.push(...modList);
// });

export const asyncRoutes = [PAGE_NOT_FOUND_ROUTE, ...routeModuleList];

export const RootRoute: AppRouteRecordRaw = {
  path: "/",
  name: "Root",
  redirect: PageEnum.BASE_HOME,
  meta: {
    title: "Root",
    isAuth: false
  }
};

export const LoginRoute: AppRouteRecordRaw = {
  path: "/login",
  name: "Login",
  component: () => import("/@/views/pages/login/Layout.vue"),
  redirect: "/login/index",
  meta: {
    title: "登录",
    isAuth: false
  },
  children: [
    {
      path: "index",
      name: "Login",
      component: () => import("/@/views/pages/login/Login.vue"),
      meta: {
        title: "登录",
        isAuth: false
      }
    },
    {
      path: "register",
      name: "Register",
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
  name: "Dashboard",
  component: () => import("/@/views/layouts/dashboard/index.vue"),
  redirect: "/dashboard/index",
  meta: {
    title: "赋能台",
    isAuth: true
  },
  children: [
    {
      path: "index",
      name: "Dashboard",
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
  REDIRECT_ROUTE
];
