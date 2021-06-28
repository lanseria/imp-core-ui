/**
 * 生成随机 len 位数字
 * 默认 4
 */
export const randomLenNum = (date = false, len?: number) => {
  let random = "";
  random = Math.ceil(Math.random() * 100000000000000)
    .toString()
    .substr(0, len || 4);
  if (date) random = random + Date.now();
  return random;
};
/**
 * // 生成随机数字, eg: 0.123456
 * // 转化成36进制 : "0.4fzyo82mvyr"
 * // 截取最后八位 : "yo82mvyr"
 */
export const randomStr = () => {
  return Math.random().toString(36).slice(-8);
};
