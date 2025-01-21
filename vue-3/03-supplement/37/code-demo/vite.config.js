import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
    // root: "public",

    define: {
        __VUE_OPTIONS_API__: true
    },

    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src")
        },
        extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"]
    },

    css: {
        /* postcss: {
            plugins: []
        } */
        // postcss 的配置
        postcss: path.resolve(__dirname, "postcss.config.js"),
        // 预处理器的配置
        preprocessorOptions: {
            scss: {
                // 给所有的 scss 文件注入一个全局的样式
                additionalData: `@import "@/assets/styles/variables.scss";`
            }
        }
    },

    server: {
        // host: "0.0.0.0",
    },

    plugins: [vue()]
});
