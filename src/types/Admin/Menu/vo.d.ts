interface MenuItemVO {
  /**
   * ID
   */
  id: number;
  /**
   * 名称
   */
  name: string;
  /**
   * 父ID
   */
  parentId: number;
  /**
   * 菜单类型 0 一级菜单 1 子菜单 2 按钮/权限
   */
  type: string;
  /**
   * 图标
   */
  icon: string;
  /**
   * 展示路径
   */
  path: string;
  /**
   * 组件地址
   */
  component: string;
  /**
   * 授权标识 admin:user:edit 这里只需要填写 edit 表示可编辑
   */
  permission: string;
  sort: number;
  /**
   * 是否为隐藏菜单 false 不隐藏 true 隐藏
   */
  hidden: boolean;
  /**
   * 是否有详情页
   */
  hasDetail: boolean;
  /**
   * ed:赋能台,ow:运维工作台, sw:系统工作台(只有一级菜单可以设置)
   */
  workbench: string;
  /**
   * 与菜单组绑定
   */
  groupId: number | null;
  groupName: string | null;
}

interface MenuTree extends MenuItemVO {
  children: MenuTree[];
  /**
   * 动态路由fullPath临时存放地址
   */
  _fullPath?: string;
}

interface MenuGroupItemVO {
  id: number;
  name: string;
  path: string;
  icon: string;
}

interface MenuModuleVO {
  module: MenuGroupItemVO[];
  menu: MenuTree[];
}
/**
 * 用来给菜单组件的数据结构
 */
interface MenuComponentTree {
  icon?: string;
  label: string;
  /**
   * fullPath => index
   * /workbench/ed/home/data
   */
  key: string;
  hidden: boolean;
  children?: MenuComponentTree[];
}

type MenuComponentTreeMap = Map<string, MenuComponentTree[]>;
