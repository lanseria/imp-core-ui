import CryptoJS from "crypto-js";
interface Params<T> {
  data: T;
  param: string[];
}
/**
 *加密处理
 */
export const encryption = <T>(params: Params<T>) => {
  const key = "gdscloudprisbest";
  const { data, param } = params;
  const result = JSON.parse(JSON.stringify(data));
  param.forEach(ele => {
    const data = result[ele];
    const iv = CryptoJS.enc.Latin1.parse(key);
    // 加密
    const encrypted = CryptoJS.AES.encrypt(data, iv, {
      iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.ZeroPadding
    });
    result[ele] = encrypted.toString();
  });
  return result;
};
