import type { App } from "vue";
// import { Icon } from './Icon';
import ImpPageContainer from "./global/ImpPageContainer.vue";
import ImpImage from "./global/ImpImage.vue";
import ImpModal from "./global/ImpModal.vue";

const compList = [ImpPageContainer, ImpImage, ImpModal];

export function registerGlobComp(app: App) {
  compList.forEach(comp => {
    app.component(comp.name || comp.displayName, comp);
  });
}
