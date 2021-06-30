/* eslint-disable @typescript-eslint/no-explicit-any */
import { validationRule } from "./rules";

/**
 * 判断是否为空
 */
export const validNull = (val: any) => {
  if (typeof val === "boolean") {
    return false;
  }
  if (typeof val === "number") {
    return false;
  }
  if (val instanceof Array) {
    if (val.length == 0) return true;
  } else if (val instanceof Object) {
    if (JSON.stringify(val) === "{}") return true;
  } else {
    if (
      val == "null" ||
      val == null ||
      val == "undefined" ||
      val == undefined ||
      val == ""
    )
      return true;
    return false;
  }
  return false;
};

/**
 * 判断手机号码是否正确
 */
export const validMobile = (phone: string) => {
  const list: [boolean, string] = [false, ""];
  let result = true;
  let msg = "";
  const isPhone = validationRule.Phone;
  if (!validNull(phone)) {
    if (phone.length == 11) {
      if (!isPhone.test(phone)) {
        msg = "手机号码格式不正确";
      } else {
        result = false;
      }
    } else {
      msg = "手机号码长度有误";
    }
  } else {
    msg = "手机号码不能为空";
  }
  list[0] = result;
  list[1] = msg;
  return list;
};
