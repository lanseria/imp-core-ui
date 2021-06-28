import { createApp } from "vue";
import App from "./App.vue";
import { setupRouterGuard } from "/@/router/guard";
import { router, setupRouter } from "/@/router";
import { setupStore } from "/@/store";

import "/@/styles/index.css";
import { initAppConfigStore } from "./logic/initAppConfig";

async function bootstrap() {
  const app = createApp(App);

  // Configure store
  setupStore(app);

  // Initialize internal system configuration
  initAppConfigStore();

  // Register global components
  // registerGlobComp(app);

  // Multilingual configuration
  // await setupI18n(app);

  // Configure routing
  setupRouter(app);

  // router-guard
  setupRouterGuard();

  // Register global directive
  // setupGlobDirectives(app);

  // Configure global error handling
  // setupErrorHandle(app);

  // Mount when the route is ready
  // https://next.router.vuejs.org/api/#isready
  await router.isReady();

  app.mount("#app", true);
}

void bootstrap();
