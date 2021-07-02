import r from "/@/router/axios";
import { api } from "./config";

export const getMenuListReq = () => {
  return r.request<R<MenuModuleVO>>({
    url: api.getMenuList,
    method: "GET"
  });
};

export const getMenuTreeReq = (params?: ParamsBase) => {
  return r.request<R<MenuTree[]>>({
    url: api.getMenuTree,
    method: "GET",
    params
  });
};

export const postMenuReq = (data: MenuItemVO) => {
  return r.request<R<boolean>>({
    url: api.postMenu,
    method: "POST",
    data
  });
};

export const putMenuReq = (data: MenuItemVO) => {
  return r.request<R<boolean>>({
    url: api.putMenu,
    method: "POST",
    data
  });
};

export const getMenuReq = (id: number) => {
  return r.request<R<MenuItemVO>>({
    url: `${api.getMenu}/${id}`,
    method: "GET"
  });
};

export const delMenuReq = (id: number) => {
  return r.request<R<boolean>>({
    url: `${api.delMenu}/${id}`,
    method: "POST"
  });
};

export const getMenuGroupListReq = () => {
  return r.request<R<MenuGroupItemVO[]>>({
    url: api.getMenuGroupList,
    method: "GET"
  });
};

export const postMenuGroupReq = (data: MenuGroupItemVO) => {
  return r.request<R<boolean>>({
    url: api.postMenuGroup,
    method: "POST",
    data
  });
};

export const putMenuGroupReq = (data: MenuGroupItemVO) => {
  return r.request<R<boolean>>({
    url: api.putMenuGroup,
    method: "POST",
    data
  });
};

export const delMenuGroupReq = (id: number) => {
  return r.request<R<boolean>>({
    url: `${api.delMenuGroup}/${id}`,
    method: "POST"
  });
};
