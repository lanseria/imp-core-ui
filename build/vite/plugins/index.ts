import type { Plugin } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { VitePWA } from "vite-plugin-pwa";
import html from "vite-plugin-html";
import viteESLint from "@ehutch79/vite-eslint";
import { configVisualizerConfig } from "./visualizer";

export function createVitePlugins(
  env: Record<string, string>,
  isBuild: boolean
) {
  console.log(env);
  const fontIconUUID = env.VITE_FONTICONUUID;
  const commonCss = [`//at.alicdn.com/t/${fontIconUUID}.css`];
  const commonJs = [
    "//res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js",
    `//at.alicdn.com/t/${fontIconUUID}.js`
  ];

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
