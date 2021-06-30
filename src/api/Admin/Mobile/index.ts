import r from "/@/router/axios";
import { api } from "./config";

export const mobileCaptchaReq = (mobile: string) => {
  return r.request<R<boolean>>({
    url: `${api.sendCaptCha}/${mobile}`,
    method: "GET"
  });
};
