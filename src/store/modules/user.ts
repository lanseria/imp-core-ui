import { defineStore } from "pinia";
import { encryption } from "/@/utils/encrypt";
import { loginReq, logoutReq, smsLoginReq } from "/@/api/Auth";
import { setUserToken } from "/@/utils/auth";
import { userInfoReq } from "/@/api/Admin/User";
import { getMenuListReq } from "/@/api/Admin/Menu";
import { router } from "/@/router";

interface UserState {
  userToken: Nullable<UserTokenVO>;
  userInfoLogin: Nullable<UserInfoLoginVO>;
  menus: Nullable<MenuTree[]>;
  modules: Nullable<MenuGroupItemVO[]>;
}

export const useUserStore = defineStore({
  id: "app-user",
  state: (): UserState => ({
    userToken: null,
    userInfoLogin: null,
    menus: null,
    modules: null
  }),
  getters: {
    getRoles(): number[] {
      return this.userInfoLogin?.roles ?? [];
    },
    getUserInfo(): Nullable<UserInfoVO> {
      return this.userInfoLogin?.sysUser ?? null;
    }
  },
  actions: {
    setUserToken(userToken: Nullable<UserTokenVO>) {
      this.userToken = userToken;
      setUserToken(this.userToken);
    },
    setUserInfo(userInfoLogin: Nullable<UserInfoLoginVO>) {
      this.userInfoLogin = userInfoLogin;
    },
    setMenus(menus: Nullable<MenuTree[]>) {
      this.menus = menus;
    },
    setModules(modules: Nullable<MenuGroupItemVO[]>) {
      this.modules = modules;
    },
    async login(data: LoginVO) {
      const form = encryption<LoginVO>({
        data,
        param: ["password"]
      });
      const body = await loginReq(form);
      this.setUserToken(body);
      await router.push("/");
    },
    async smsLogin(data: SmsLoginVO) {
      const body = await smsLoginReq(data);
      this.setUserToken(body);
      await router.push("/");
    },
    async logout() {
      try {
        const { data, msg, code } = await logoutReq();
        if (data) {
          console.log("用户登出成功");
          // 不管有没有请求成功都是清空用户数据
          this.removeAll();
          await router.push({
            name: "Login"
          });
          return true;
        } else {
          console.error(msg, code, data);
          return false;
        }
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    async gSetUserInfo() {
      const body = await userInfoReq();
      this.setUserInfo(body.data);
    },
    async gSetMenusModules() {
      const { data } = await getMenuListReq();
      this.setMenus(data.menu);
      this.setModules(data.module);
    },
    async getAll() {
      await this.gSetUserInfo();
      await this.gSetMenusModules();
    },
    removeAll() {
      this.setUserToken(null);
      this.setUserInfo(null);
    }
  }
});
