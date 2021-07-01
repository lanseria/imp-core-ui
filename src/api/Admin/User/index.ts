import r from "/@/router/axios";
import { api } from "./config";
/**
 * 简单登录用户信息获取
 */
export const userInfoReq = () => {
  return r.request<R<UserInfoLoginVO>>({
    url: api.info,
    method: "GET"
  });
};

/**
 * 复杂用户信息获取
 */
export const informationReq = () => {
  return r.request<R<UserVO>>({
    url: api.information,
    method: "GET"
  });
};

/**
 * 更新用户信息
 * @param data
 */
export const editDetailReq = (data: UserVO) => {
  return r.request<R<boolean>>({
    url: api.editDetail,
    method: "POST",
    data
  });
};
