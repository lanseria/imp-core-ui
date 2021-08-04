import r from "/@/router/axios";
import { api } from "./config";

export const adminPdfPageReq = (params: Partial<PageParam>) => {
  return r.request<R<PageResult<IObj>>>({
    url: api.pdfPage,
    method: "GET",
    params
  });
};

export const adminPdfDetailByIdReq = (id: number) => {
  return r.request<R<any>>({
    url: `${api.pdfDetail}/${id}`,
    method: "GET"
  });
};

export const adminPdfContentByIdReq = (params: any) => {
  return r.request<R<any>>({
    url: `${api.pdfContent}`,
    method: "GET",
    params
  });
};
