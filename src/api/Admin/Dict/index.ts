import r from "/@/router/axios";
import { DictDTO } from "/@/types/Admin/Dict/dto";
import { api } from "./config";

export const getDictReq = (id: number) => {
  return r.request<R<DictDTO>>({
    url: `${api.dict}/${id}`,
    method: "GET"
  });
};

export const getDictPageReq = (params: Partial<PageParam>) => {
  return r.request<R<PageResult<AdminDictPageItemVO>>>({
    url: api.dictPage,
    method: "GET",
    params
  });
};

export const createDictReq = (data: DictDTO) => {
  return r.request<R<boolean>>({
    url: api.createDict,
    method: "POST",
    data
  });
};

export const updateDictReq = (data: DictDTO) => {
  return r.request<R<boolean>>({
    url: api.updateDict,
    method: "POST",
    data
  });
};

export const deleteDictReq = (id: number) => {
  return r.request<R<boolean>>({
    url: `${api.deleteDict}/${id}`,
    method: "POST"
  });
};

export const getDictAllMapReq = () => {
  return r.request<R<DictDirectory>>({
    url: api.getDictAllMap,
    method: "GET"
  });
};

/**
 * 获取字典的数据
 * @param id 字典ID
 */
export const getChild = (id: number | string) => {
  return r.request<R<DictDirectory>>({
    url: `${api.getChild}/${id}`,
    method: "get"
  });
};
/**
 * 删除字典数据
 * @param id 字典数据ID
 */
export const deleteChildById = (id: number) => {
  return r.request<R<boolean>>({
    url: `${api.delChild}/${id}`,
    method: "post"
  });
};
/**
 * 新增字典数据
 * @param data 字典数据DTO
 */
export const createChild = (data: IObj) => {
  return r.request({
    url: api.createChild,
    method: "post",
    data
  });
};
/**
 *修改字典数据
 * @param data 字典数据DTO
 */
export const updateChild = (data: IObj) => {
  return r.request({
    url: api.updateChild,
    method: "post",
    data
  });
};
