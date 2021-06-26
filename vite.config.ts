import { ConfigEnv, loadEnv, UserConfig } from "vite";
import { resolve } from "path";
import type { Alias } from "vite";
import { createVitePlugins } from "./build/vite/plugins";

function pathResolve(dir: string) {
  return resolve(__dirname, ".", dir);
}

function createAlias(alias: [string, string][]): Alias[] {
  return alias.map(item => {
    const [alia, src] = item;
    return {
      find: new RegExp(alia),
      replacement: pathResolve(src) + "/"
    };
  });
}
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  const isBuild = command === "build";
  return {
    base: "/",
    root,
    resolve: {
      alias: createAlias([
        // /@/xxxx => src/xxxx
        ["/@/", "src"],
        ["/#/", "types"]
      ]),
      extensions: [".vue", ".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"]
    },
    build: {
      target: "esnext",
      terserOptions: {
        compress: {
          keep_infinity: true,
          // Used to delete console in production environment
          // 用于删除生产环境中的控制台
          drop_console: true
        }
      },
      // Turning off brotliSize display can slightly reduce packaging time
      // 关掉BrotliSize显示可以稍微减少包装时间
      brotliSize: false,
      chunkSizeWarningLimit: 2000
    },
    // css: {
    //   preprocessorOptions: {
    //     scss: {
    //       additionalData: `
    //     @import "./src/styles/var.scss";
    //     `
    //     }
    //   }
    // },
    server: {
      port: +env.VITE_PORT,
      // Load proxy configuration from .env
      // 从.env中加载代理配置
      proxy: {
        "/api": {
          target: env.VITE_BASEURL,
          changeOrigin: true,
          ws: true,
          rewrite: path => path.replace(/^\/api/, "")
        }
      },
      hmr: {
        overlay: true
      }
    },
    plugins: createVitePlugins(env, isBuild),
    optimizeDeps: {
      include: ["dayjs/plugin/advancedFormat"],
      exclude: ["vue-demi"]
    }
  };
};
