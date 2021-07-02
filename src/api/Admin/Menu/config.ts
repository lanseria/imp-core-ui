import { modulePrefix } from "../config";
const prefix = `${modulePrefix}/menu`;

const api = {
  getMenuList: `${prefix}/module/menu`, // GET
  getMenuTree: `${prefix}/saa_s/tree`,
  postMenu: `${prefix}/create`, // POST
  putMenu: `${prefix}/update`, // POST
  getMenu: `${prefix}`, // GET
  delMenu: `${prefix}/delete`, // POST

  getMenuGroupList: `${prefix}/group/list`, // GET
  postMenuGroup: `${prefix}/group/create`, //POST
  putMenuGroup: `${prefix}/group/update`, //POST
  delMenuGroup: `${prefix}/group/delete` //POST
};

export { api };
