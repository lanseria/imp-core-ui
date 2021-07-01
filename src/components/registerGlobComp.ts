import type { App } from "vue";
// import { Icon } from './Icon';
import PageContainer from "./common/PageContainer.vue";

const compList = [PageContainer];

export function registerGlobComp(app: App) {
  compList.forEach(comp => {
    app.component(comp.name || comp.displayName, comp);
  });
}
