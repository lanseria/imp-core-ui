import { compact, intersection, keys, pick } from "lodash-es";

/**
 * 覆盖对象属性
 * @param distObject 初始化对象
 * @param srcObject 传递过来新对象
 */
export function mergeProperties<T>(distObject: T, srcObject: IObj) {
  const distPropList = keys(distObject);
  const srcPropList = keys(srcObject);
  const propList = intersection(distPropList, srcPropList);
  return {
    ...distObject,
    ...pick(srcObject, propList)
  };
}

interface SplicingRouterStringOpt {
  wbName: string;
  gName: string;
  alterPropName: keyof MenuTree;
  propName: keyof MenuTree;
  defaultValue?: string;
}

export const splicingRouterString = (
  aMenu: MenuTree,
  opt: SplicingRouterStringOpt,
  isChild: boolean,
  parentMenu?: MenuTree
) => {
  if (isChild) {
    // 给子元素继承组件路径前缀
    aMenu[opt.alterPropName] = compact([
      opt.wbName,
      opt.gName,
      aMenu[opt.propName]
    ]).join("/") as never; // hack处理
    // 如果有子元素就直接用空白 layout
    if (opt.defaultValue) {
      // return "layouts/Blank";
      return opt.defaultValue;
    } else {
      return aMenu[opt.alterPropName];
    }
  } else {
    // 是一级菜单页面
    if (!parentMenu) {
      const compPath = compact([
        opt.wbName,
        opt.gName,
        aMenu[opt.propName]
      ]).join("/");
      return compPath;
    }
    // 二级菜单页面
    else {
      const compPath = compact([
        parentMenu[opt.alterPropName],
        aMenu[opt.propName]
      ]).join("/");
      return compPath;
    }
  }
};
