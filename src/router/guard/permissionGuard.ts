import type { Router } from "vue-router";
// import { useStore } from "/@/store";
import { LoginRoute } from "../routes";
import { REDIRECT_NAME } from "../constant";

export function createPermissionGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    // const store = useStore();
    const meta = to.meta || {};
    const accessToken = "";

    if (accessToken) {
      if (to.name === LoginRoute.name) {
        next("/");
      } else {
        // 0 进入获取用户基本信息 1 以上就跳过进入正常页面
        // console.log(store.getters);

        try {
          // 刷新页面不丢失token重新获取用户信息与菜单
          // await store.dispatch(UserActionTypes.GET_USER_INFORMATION);
          // console.log(redirect);
          if (to.name === REDIRECT_NAME) {
            // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
            next({ ...to, replace: true });
          } else {
            // 跳转到目的路由
            console.log("跳转到目的路由");
            next(REDIRECT_NAME);
          }
        } catch (error) {
          console.log("跳出info错误");
          console.error(error);
          // await store.dispatch(UserActionTypes.LOGOUT_USER);
          next();
        }
      }
    } else {
      if (meta.isAuth === false) {
        next();
      } else {
        const redirect = encodeURIComponent(to.fullPath);
        next({
          name: LoginRoute.name,
          query: {
            redirect
          }
        });
      }
    }
  });
}
