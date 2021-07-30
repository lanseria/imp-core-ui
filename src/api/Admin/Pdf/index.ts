import r from "/@/router/axios";
import { api } from "./config";

export const adminPdfPageReq = (params: Partial<PageParam>) => {
  return r.request<R<PageResult<IObj>>>({
    url: api.pdfPage,
    method: "GET",
    params
  });
};
