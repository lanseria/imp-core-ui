import storage from "store";

export const setUserToken = (v: Nullable<UserTokenVO>) => {
  v ? storage.set("USER_TOKEN", v) : storage.remove("USER_TOKEN");
};

export const getUserToken = (): UserTokenVO => {
  return storage.get("USER_TOKEN");
};

export const setUserInfo = (v: Nullable<UserInfoLoginVO>) => {
  v ? storage.set("USER_INFO", v) : storage.remove("USER_INFO");
};

export const getUserInfo = (): UserInfoLoginVO => {
  return storage.get("USER_INFO");
};
