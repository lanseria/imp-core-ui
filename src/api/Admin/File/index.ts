import r from "/@/router/axios";
import { api } from "./config";

interface FileUploadResponse {
  bucketName: string;
  fileName: string;
  url: string;
}

export const postFileUploadAvatarReq = (data: FormData) => {
  return r.request<R<FileUploadResponse>>({
    url: api.postFileUploadAvatar,
    method: "POST",
    data
  });
};

// const downLoadMessage = [
//   "文件较大，正在下载中，请耐心等候",
//   "文件过大，需要较长下载时间，请耐心等候"
// ];
const toDataURL = (url: string) => {
  return fetch(url)
    .then(response => {
      return response.blob();
    })
    .then(blob => {
      return URL.createObjectURL(blob);
    });
};

export const downloadReq = async (file: Attachment) => {
  const a = document.createElement("a");
  a.href = await toDataURL(file.url);
  a.download = file.name;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

export const downloadFileReq = (file: IObj) => {
  // const downLoadCode1 = window.setTimeout(() => {
  //   iepMessage(downLoadMessage[0]);
  // }, 1000 * 10);
  // const downLoadCode2 = window.setInterval(() => {
  //   iepMessage(downLoadMessage[1]);
  // }, 1000 * 60);
  r.request({
    url: `${api.file}/${file.url}`,
    method: "get",
    responseType: "arraybuffer"
  }).then(data => {
    // 处理返回的文件流
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const blob = new Blob([data as any]);
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = file.name;
    document.body.appendChild(link);
    link.style.display = "none";
    link.click();
    // 关闭定时信息
    // window.clearTimeout(downLoadCode1);
    // window.clearInterval(downLoadCode2);
  });
};

export const filePageReq = (params: Partial<PageParam>) => {
  return r.request<R<PageResult<IObj>>>({
    url: api.page,
    method: "GET",
    params
  });
};

export const delFileById = (id: number) => {
  return r.request<R<boolean>>({
    url: `${api.id}/delete/${id}`,
    method: "post"
  });
};
