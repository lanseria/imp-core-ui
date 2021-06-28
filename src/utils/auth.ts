import storage from "store";

export const setUserToken = (v: Nullable<UserTokenVO>) => {
  v ? storage.set("USER_TOKEN", v) : storage.remove("USER_TOKEN");
};

export const getUserToken = (): Nullable<UserTokenVO> => {
  return storage.get("USER_TOKEN", null);
};

export const setUserInfo = (v: Nullable<UserInfoLoginVO>) => {
  v ? storage.set("USER_INFO", v) : storage.remove("USER_INFO");
};

export const getUserInfo = (): Nullable<UserInfoLoginVO> => {
  return storage.get("USER_INFO", null);
};
