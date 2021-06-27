import storage from "store";

export const setToken = (v: string) => {
  storage.set("USER_TOKEN", v);
};

export const getToken = (): string => {
  return storage.get("USER_TOKEN");
};

export const setUserInfo = (v: UserInfoLoginVO) => {
  storage.set("USER_INFO", v);
};

export const getUserInfo = (): UserInfoLoginVO => {
  return storage.get("USER_INFO");
};
