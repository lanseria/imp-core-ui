import { defineStore } from "pinia";
import { encryption } from "/@/utils/encrypt";
import { loginReq, logoutReq } from "/@/api/Auth";
import { setUserToken, setUserInfo } from "/@/utils/auth";
import { userInfoReq } from "/@/api/Admin/User";
import { LoginRoute } from "/@/router/routes";
import { router } from "/@/router";

interface UserState {
  userToken: Nullable<UserTokenVO>;
  userInfoLogin: Nullable<UserInfoLoginVO>;
}

export const useUserStore = defineStore({
  id: "app-user",
  state: (): UserState => ({
    userToken: null,
    userInfoLogin: null
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
      setUserInfo(this.userInfoLogin);
    },
    async login(data: LoginVO) {
      try {
        const form = encryption<LoginVO>({
          data,
          param: ["password"]
        });
        const body = await loginReq(form);
        this.setUserToken(body);
        this.gSetUserInfo();
        router.push("/");
      } catch (error) {
        console.error(error);
      }
    },
    async logout() {
      try {
        const { data, msg, code } = await logoutReq();
        if (data) {
          console.log("用户登出成功");
        } else {
          console.error(msg, code, data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        router.push({
          name: LoginRoute.name
        });
        // 不管有没有请求成功都是清空用户数据
        this.removeAll();
      }
    },
    async gSetUserInfo() {
      try {
        const body = await userInfoReq();
        this.setUserInfo(body.data);
      } catch (error) {
        throw new Error(error);
      }
    },
    removeAll() {
      this.setUserToken(null);
      this.setUserInfo(null);
    }
  }
});
