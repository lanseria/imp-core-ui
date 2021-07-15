import { ConfigEnv, loadEnv, UserConfig } from "vite";
import { resolve } from "path";
import { createVitePlugins } from "./build/vite/plugins";

function pathResolve(dir: string) {
  return resolve(__dirname, ".", dir);
}

export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  console.log(mode);
  return {
    // /
    base: env.VITE_PUBLIC_PATH,
    root,
    resolve: {
      alias: [
        // /@/xxxx => src/xxxx
        {
          find: /\/@\//,
          replacement: pathResolve("src") + "/"
        }
      ]
    },
    build: {
      target: "esnext"
      // terserOptions: {
      //   compress: {
      //     keep_infinity: true,
      //     // Used to delete console in production environment
      //     // 用于删除生产环境中的控制台
      //     drop_console: true
      //   }
      // },
      // Turning off brotliSize display can slightly reduce packaging time
      // 关掉BrotliSize显示可以稍微减少包装时间
      // brotliSize: false,
      // chunkSizeWarningLimit: 2000
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
      host: env.VITE_HOST,
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
    plugins: createVitePlugins(env, command, mode),
    optimizeDeps: {
      include: ["dayjs/plugin/advancedFormat"],
      exclude: ["vue-demi"]
    }
  };
};
