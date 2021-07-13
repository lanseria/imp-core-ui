import type { Plugin } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { VitePWA } from "vite-plugin-pwa";
import html from "vite-plugin-html";
import viteESLint from "@ehutch79/vite-eslint";
import { viteMockServe } from "vite-plugin-mock";
import { configVisualizerConfig } from "./visualizer";

export function createVitePlugins(
  env: Record<string, string>,
  isBuild: boolean
) {
  console.log(env);
  const fontIconUUID = env.VITE_FONTICONUUID;
  const commonCss: string[] = [];
  const commonJs = [`https://at.alicdn.com/t/${fontIconUUID}.js`];
  let prodMock = true;
  const vitePlugins: (Plugin | Plugin[])[] = [
    // have to
    vue(),
    // have to
    vueJsx(),
    viteESLint(),
    html({
      inject: {
        injectData: {
          title: "企业智慧赋能平台",
          css: [...commonCss],
          js: [...commonJs]
        }
      },
      minify: true
    }),
    viteMockServe({
      // default
      mockPath: "mock",
      localEnabled: !isBuild && env.VITE_USE_MOCK === "true",
      prodEnabled: isBuild && prodMock,
      //  这样可以控制关闭mock的时候不让mock打包到最终代码内
      injectCode: `
        import { setupProdMockServer } from '../mock/_createProductionServer';
        setupProdMockServer();
        `
    })
  ];
  // The following plugins only work in the production environment
  if (isBuild) {
    vitePlugins.push(
      VitePWA({
        registerType: "autoUpdate"
      })
    );

    // rollup-plugin-visualizer
    vitePlugins.push(configVisualizerConfig());
  }

  return vitePlugins;
}
