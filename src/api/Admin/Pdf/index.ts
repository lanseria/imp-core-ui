import r, { requestWithRes } from "/@/router/axios";
import { api } from "./config";
import qs from "qs";

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

export const adminPdfShareByIdReq = (id: number) => {
  return r.request<R<boolean>>({
    url: `${api.pdfShare}/${id}`,
    method: "POST"
  });
};

export const adminPdfDownloadByIdReq = (id: number) => {
  requestWithRes
    .request<R<boolean>>({
      url: `${api.pdfDownload}/${id}`,
      method: "GET",
      responseType: "arraybuffer"
    })
    .then((res: any) => {
      // 处理返回的文件流
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const fileQs = res.headers["content-disposition"];
      const fileObj = qs.parse(fileQs, { delimiter: ";" });
      const blob = new Blob([res.data as any]);
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = fileObj.filename as string;
      document.body.appendChild(link);
      link.style.display = "none";
      link.click();
      // 关闭定时信息
      // window.clearTimeout(downLoadCode1);
      // window.clearInterval(downLoadCode2);
    });
};

export const adminPdfAnnotationDeleteByIdReq = (id: number) => {
  return r.request<R<boolean>>({
    url: `${api.pdfAnnotationDelete}/${id}`,
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
