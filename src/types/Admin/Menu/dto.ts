class MenuItemDTO implements MenuItemVO {
  id: number;
  name: string;
  parentId: number;
  type: string;
  icon: string;
  path: string;
  component: string;
  permission: string;
  sort: number;
  hidden: boolean;
  hasDetail: boolean;

  workbench: string;
  groupId: number | null;
  groupName: string | null;
  constructor(option?: IObj) {
    this.id = option?.id ?? 0;
    this.name = option?.name ?? "";
    this.parentId = option?.parentId ?? -1;
    this.type = option?.type ?? "0";
    this.icon = option?.icon ?? "el-icon-menu";
    this.path = option?.path ?? "";
    this.component = option?.component ?? "";
    this.permission = option?.permission ?? "";
    this.sort = option?.sort ?? 0;
    this.hidden = option?.hidden ?? false;
    this.hasDetail = option?.hasDetail ?? false;
    this.workbench = option?.workbench ?? "ed";
    this.groupId = option?.groupId ?? null;
    this.groupName = option?.groupName ?? "";
  }
}

class MenuGroupItemDTO implements MenuGroupItemVO {
  id: number;
  name: string;
  path: string;
  icon: string;
  constructor() {
    this.id = 0;
    this.name = "默认菜单组";
    this.path = "";
    this.icon = "el-icon-menu";
  }
}

export { MenuItemDTO, MenuGroupItemDTO };
