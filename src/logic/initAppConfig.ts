/**
 * Application configuration
 */

import { useAppStore } from "../store/modules/app";
import { useUserStore } from "../store/modules/user";
import { getUserToken } from "../utils/auth";

// Initial project configuration
export function initAppConfigStore() {
  const appStore = useAppStore();
  const userStore = useUserStore();
  // appStore
  appStore.initTheme();
  // userStore
  const userToken = getUserToken();
  userStore.setUserToken(userToken);
}
