import storage from "store";

export const setUserToken = (v: Nullable<UserTokenVO>) => {
  v ? storage.set("USER_TOKEN", v) : storage.remove("USER_TOKEN");
};

export const getUserToken = (): Nullable<UserTokenVO> => {
  return storage.get("USER_TOKEN", null);
};
