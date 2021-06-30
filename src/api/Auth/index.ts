import r from "/@/router/axios";
import { SmsLoginDTO } from "/@/types/User/dto";
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

export const smsLoginReq = (data: SmsLoginVO) => {
  const smsLoginDto = new SmsLoginDTO(data);
  return r.request<UserTokenVO>({
    url: api.smsLogin,
    headers: initalHeader,
    method: "POST",
    params: {
      ...smsLoginDto,
      ...initalAppendForm("mobile")
    }
  });
};

export const logoutReq = () => {
  return r.request<R<boolean>>({
    url: api.logout,
    method: "DELETE"
  });
};
