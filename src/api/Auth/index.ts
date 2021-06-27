import r from "/@/router/axios";
import { api, initalAppendForm, initalHeader } from "./config";

export const loginReq = (data: LoginVO) => {
  return r.request<UserTokenVO>({
    url: api.login,
    method: "POST",
    headers: initalHeader,
    params: {
      ...data,
      ...initalAppendForm()
    }
  });
};

export const logoutReq = () => {
  return r.request<R<boolean>>({
    url: api.logout,
    method: "DELETE"
  });
};
