import { defineStore } from "pinia";
import { encryption } from "/@/utils/encrypt";
import { loginReq, logoutReq, smsLoginReq } from "/@/api/Auth";
import { setUserToken } from "/@/utils/auth";
import { userInfoReq } from "/@/api/Admin/User";
import { getMenuListReq } from "/@/api/Admin/Menu";
import { addRouteByMenu, resetRouter, router } from "/@/router";
import { RouteRecordRaw } from "vue-router";
import { getDictAllMapReq } from "/@/api/Admin/Dict";

interface UserState {
  userToken: Nullable<UserTokenVO>;
  userInfoLogin: Nullable<UserInfoLoginVO>;
  // menu
  menus: Nullable<MenuTree[]>;
  modules: Nullable<MenuGroupItemVO[]>;
  menuComponentTreeMap: MenuComponentTreeMap;
  enableWorkbenchList: RouteRecordRaw[];
  // dict
  dataDict: Map<string, DictVO[]>;
}

export const useUserStore = defineStore({
  id: "app-user",
  state: (): UserState => ({
    userToken: null,
    userInfoLogin: null,
    menus: null,
    modules: null,
    menuComponentTreeMap: new Map(),
    enableWorkbenchList: [],
    dataDict: new Map()
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
    setMenusModules(data: Nullable<MenuModuleVO>) {
      if (data) {
        this.menus = data.menu;
        this.modules = data.module;
        // console.log("拿到路由, 构建路由, 返回可访问工作台列表");
        if (this.menus && this.modules) {
          const [enableWorkbenchList, menuComponentTreeMap] = addRouteByMenu(
            this.menus,
            this.modules
          );
          // 通过路由映射不同的菜单组
          this.menuComponentTreeMap = menuComponentTreeMap;
          // 全部可访问的工作台
          this.enableWorkbenchList = enableWorkbenchList;
        }
      } else {
        this.menus = null;
        this.modules = null;
        this.menuComponentTreeMap = new Map();
        this.enableWorkbenchList = [];
        resetRouter();
      }
    },
    setDataDict(dataDict: Nullable<DictDirectory>) {
      if (dataDict) {
        const dictEntries = Object.entries(dataDict);
        const dictMap = new Map(dictEntries);
        this.dataDict = dictMap;
      } else {
        this.dataDict = new Map();
      }
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
      this.setMenusModules(data);
    },
    async gSetDataDict() {
      const body = await getDictAllMapReq();
      this.setDataDict(body.data);
    },
    async getAll() {
      await this.gSetUserInfo();
      await this.gSetMenusModules();
      await this.gSetDataDict();
    },
    removeAll() {
      this.setUserToken(null);
      this.setUserInfo(null);
      this.setMenusModules(null);
      this.setDataDict(null);
    }
  }
});
