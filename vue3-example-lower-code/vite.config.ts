import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import vueDevTools from "vite-plugin-vue-devtools";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "^/api": "http://localhost:3000",
      "^/uploads": "http://localhost:3000",
    },
  },

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    /* visualizer({
      filename: "./dist/stats.html",
      gzipSize: true,
      brotliSize: true,
    }), */
  ],

  /* build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // 自动将大于 250KB 的依赖单独打包
          if (id.includes("node_modules")) {
            const packageName = id.toString().split("node_modules/")[1].split("/")[0].toString();
            return `vendor-${packageName}`;
          }
        },
        chunkFileNames: "chunks/[name]-[hash].js", // 输出文件路径格式
      },
    },
  }, */
});
