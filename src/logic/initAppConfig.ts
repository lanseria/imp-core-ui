/**
 * Application configuration
 */

import { useAppStore } from "../store/modules/app";

// Initial project configuration
export function initAppConfigStore() {
  const appStore = useAppStore();
  appStore.initTheme();
}
