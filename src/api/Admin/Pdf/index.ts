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
export const adminPdfDeleteByIdReq = (id: number) => {
  return r.request<R<boolean>>({
    url: `${api.pdfDelete}/${id}`,
    method: "POST"
  });
};

export const adminPdfContentByIdReq = (params: any) => {
  return r.request<R<any>>({
    url: `${api.pdfContent}`,
    method: "GET",
    params
  });
};

export const adminPdfAnnotateByIdReq = (params: any) => {
  return r.request<R<PdfAnnotateVO[]>>({
    url: `${api.pdfAnnotate}`,
    method: "GET",
    params
  });
};

export const adminPdfAnnotateCreateReq = (data: any) => {
  return r.request<R<boolean>>({
    url: `${api.uploadAnnotation}`,
    method: "POST",
    data
  });
};
