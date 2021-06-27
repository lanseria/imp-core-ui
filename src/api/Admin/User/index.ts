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
