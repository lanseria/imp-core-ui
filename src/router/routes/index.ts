import type { AppRouteRecordRaw, AppRouteModule } from "/@/router/types";

import { PAGE_NOT_FOUND_ROUTE, REDIRECT_ROUTE } from "/@/router/routes/basic";

import { PageEnum } from "/@/enums/pageEnum";

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
  component: () => import("/@/views/pages/login/Login.vue"),
  meta: {
    title: "登录",
    isAuth: false
  }
};

export const DashboardRoute: AppRouteRecordRaw = {
  path: "/dashboard",
  name: "Dashboard",
  component: () => import("/@/views/layouts/dashboard/index.vue"),
  redirect: "/dashboard/index",
  meta: {
    title: "主页",
    isAuth: true
  },
  children: [
    {
      path: "index",
      name: "Dashboard",
      component: () => import("/@/views/pages/dashboard/index.vue"),
      meta: {
        title: "主页",
        isAuth: true
      }
    }
  ]
};

// Basic routing without permission
export const basicRoutes = [
  LoginRoute,
  DashboardRoute,
  RootRoute,
  REDIRECT_ROUTE
];
