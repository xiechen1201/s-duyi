import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue()],

    // 构建相关的配置
    // Detail: https://cn.vitejs.dev/config/build-options.html
    build: {}
});
