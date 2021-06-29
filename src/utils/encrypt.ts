import cryptoLatin1 from "crypto-js/enc-latin1";
import cryptoAES from "crypto-js/aes";
import cryptoZeroPadding from "crypto-js/pad-zeropadding";
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
    const iv = cryptoLatin1.parse(key);
    // 加密
    const encrypted = cryptoAES.encrypt(data, iv, {
      iv,
      padding: cryptoZeroPadding
    });
    result[ele] = encrypted.toString();
  });
  return result;
};
