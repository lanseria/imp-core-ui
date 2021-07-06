import type { RouteRecordRaw } from "vue-router";
import type { App } from "vue";

import { createRouter, createWebHistory } from "vue-router";
import { basicRoutes } from "./routes";
import {
  CENTER_NAME,
  DASHBOARD_NAME,
  ERROR_NAME,
  LOGIN_NAME,
  REDIRECT_NAME
} from "./constant";
import { splicingRouterString } from "../utils/common";
import { hadAuthMeta } from "./config";
import BlankLayout from "/@/views/layouts/default/index.vue";
import WbLayout from "/@/views/layouts/dashboard/index.vue";
import CenterLayout from "/@/views/layouts/center/index.vue";
import { randomStr } from "../utils/random";
import { groupBy } from "lodash-es";

const WHITE_NAME_LIST = [
  LOGIN_NAME,
  REDIRECT_NAME,
  ERROR_NAME,
  DASHBOARD_NAME,
  CENTER_NAME
];

// app router
export const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes: basicRoutes as unknown as RouteRecordRaw[],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 })
});

// reset router
export function resetRouter() {
  router.getRoutes().forEach(route => {
    const { name } = route;
    if (name && !WHITE_NAME_LIST.includes(name as string)) {
      router.hasRoute(name) && router.removeRoute(name);
    }
  });
}

// config router
export function setupRouter(app: App<Element>) {
  app.use(router);
}

function dynamicImport(
  dynamicViewsModules: Record<string, () => Promise<Recordable>>,
  component: string
) {
  const keys = Object.keys(dynamicViewsModules);
  const matchKeys = keys.filter(key => {
    let k = key.replace("../views/", "");
    const lastIndex = k.lastIndexOf(".");
    k = k.substring(0, lastIndex);
    return k === component;
  });
  if (matchKeys?.length === 1) {
    const matchKey = matchKeys[0];
    return dynamicViewsModules[matchKey];
  }
  if (matchKeys?.length > 1) {
    console.warn(
      "请不要在views文件夹下的同一层次目录中创建具有相同文件名的`.vue`和`.TSX`文件。这将导致动态引入失败"
    );
    return;
  }
  return;
}

const dynamicViewsModules: Record<string, () => Promise<Recordable>> =
  import.meta.glob("../views/**/*.{vue,tsx}");

const asyncImportRoute = (componentPath: string, fileName: string) => {
  const component = [componentPath, fileName].join("/");
  return dynamicImport(dynamicViewsModules, component);
};

const transferMenu = (
  menuList: MenuTree[],
  parentMenu?: MenuTree,
  wbName = "ed",
  gName = "home"
): [RouteRecordRaw[], MenuComponentTree[]] => {
  const menuRouter: RouteRecordRaw[] = [];
  const menuComponent: MenuComponentTree[] = [];
  for (let i = 0; i < menuList.length; i++) {
    const aMenu = menuList[i];
    const isChild = aMenu.children.length !== 0;
    // menu 各个属性
    const path = aMenu.path;
    const icon = aMenu.icon;
    const name = parentMenu ? `${parentMenu.name}-${aMenu.name}` : aMenu.name;
    const metaName = parentMenu
      ? [...parentMenu.name.split("-"), aMenu.name]
      : [aMenu.name];
    const _componentName = splicingRouterString(
      aMenu,
      {
        wbName,
        gName,
        alterPropName: "component",
        propName: "component",
        defaultValue: "layouts/Blank"
      },
      isChild,
      parentMenu
    ) as string;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const component = asyncImportRoute(_componentName, "index")!;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const componentDetail = asyncImportRoute(_componentName, "Detail")!;
    // component 必须在前面
    const _fullPath = splicingRouterString(
      aMenu,
      {
        wbName,
        gName,
        alterPropName: "_fullPath",
        propName: "path"
      },
      isChild,
      parentMenu
    );
    const fullPath = `/workbench/${_fullPath}`;
    const [childrenToItem, childrenToComp] = !isChild
      ? [[], []]
      : transferMenu(aMenu.children, aMenu, wbName, gName);
    const redirect = childrenToItem.length
      ? childrenToComp[0].fullPath
      : undefined;
    const meta = {
      name: name,
      metaName: metaName,
      ...hadAuthMeta
    };
    // 组装路由对象
    const menuItem: RouteRecordRaw = aMenu.hasDetail
      ? {
          meta,
          path,
          component: BlankLayout,
          redirect: `${fullPath}/page`,
          children: [
            {
              // method: show/edit/add
              path: ":id/:method",
              meta,
              name: `${name}详情`,
              props: true,
              component: componentDetail
            },
            {
              path: ":method",
              meta,
              name: `${name}`,
              props: true,
              component
            }
          ]
        }
      : {
          children: childrenToItem,
          component,
          meta,
          name: `${aMenu.name}${randomStr()}`,
          path,
          redirect
        };
    // 组装菜单组件数据结构对象
    const menuComp: MenuComponentTree = {
      icon,
      name: aMenu.name,
      fullPath,
      hidden: aMenu.hidden,
      children: childrenToComp
    };
    menuRouter.push(menuItem);
    menuComponent.push(menuComp);
  }
  return [menuRouter, menuComponent];
};

const generateEdRouter = (
  edMenu: MenuTree[],
  menuGroup: MenuGroupItemVO[]
): [RouteRecordRaw[], MenuComponentTreeMap] => {
  const routerResult: RouteRecordRaw[] = [];
  const compResultMap: MenuComponentTreeMap = new Map();
  const mRouter = groupBy(edMenu, "groupId");
  menuGroup.map(mG => {
    const menuGList = mRouter[mG.id];
    if (menuGList) {
      // generate children
      const [routerChild, componentChild] = transferMenu(
        menuGList,
        undefined,
        "ed",
        mG.path
      );
      routerResult.push({
        path: mG.path,
        name: `${mG.name}${randomStr()}`,
        meta: {
          name: mG.name,
          ...hadAuthMeta
        },
        redirect: `/workbench/ed/${mG.path}/${routerChild[0].path}`,
        component: BlankLayout,
        children: routerChild
      });
      compResultMap.set(`/workbench/ed/${mG.path}`, componentChild);
    }
  });
  return [routerResult, compResultMap];
};

const generateWRouter = (wMenu: MenuTree[], workbench: string) => {
  return transferMenu(wMenu, undefined, workbench, "");
};

const addRouteByMenu = (
  menu: MenuTree[],
  menuGroup: MenuGroupItemVO[]
): [RouteRecordRaw[], MenuComponentTreeMap] => {
  const workbenchRoutes: RouteRecordRaw[] = [];
  const workbenchMenuGroup = groupBy(menu, "workbench");
  let workbenchMenuMap: MenuComponentTreeMap = new Map();
  // 赋能台
  if (workbenchMenuGroup["ed"]) {
    const [edRouter, compMap] = generateEdRouter(
      workbenchMenuGroup["ed"],
      menuGroup
    );
    workbenchMenuMap = new Map([...compMap]);
    // 直接替换更好一点
    const EDR: RouteRecordRaw = {
      name: "赋能台",
      path: "ed",
      redirect: "/workbench/ed/home",
      component: WbLayout,
      children: edRouter
    };
    workbenchRoutes.push(EDR);
  }
  // 运维工作台
  if (workbenchMenuGroup["ow"]) {
    const [owRouter, todoChild] = generateWRouter(
      workbenchMenuGroup["ow"],
      "ow"
    );
    workbenchMenuMap.set("/workbench/ow", todoChild);
    const OWR: RouteRecordRaw = {
      name: "运营工作台",
      path: "ow",
      redirect: `/workbench/ow/${owRouter[0].path}`,
      component: WbLayout,
      children: owRouter
    };
    workbenchRoutes.push(OWR);
  }
  // 系统工作台
  if (workbenchMenuGroup["sw"]) {
    const [swRouter, todoChild] = generateWRouter(
      workbenchMenuGroup["sw"],
      "sw"
    );
    workbenchMenuMap.set("/workbench/sw", todoChild);
    const SWR: RouteRecordRaw = {
      name: "系统工作台",
      path: "sw",
      redirect: `/workbench/sw/${swRouter[0].path}`,
      component: WbLayout,
      children: swRouter
    };

    workbenchRoutes.push(SWR);
  }
  if (workbenchRoutes.length !== 0) {
    const redirectWb = workbenchRoutes[0].path;
    // 添加路由
    router.addRoute({
      name: "工作台",
      path: "/workbench",
      redirect: `/workbench/${redirectWb}`,
      component: CenterLayout,
      children: workbenchRoutes
    });
  }

  return [workbenchRoutes, workbenchMenuMap];
};

export { addRouteByMenu };
