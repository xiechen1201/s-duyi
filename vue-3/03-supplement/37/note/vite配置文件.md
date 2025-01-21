# vite配置文件

任何的工具都应该支持用户进行自定义的配置，vite也不例外。

根目录下 vite.config.js 文件，基本格式：

```js
export default {
  // 配置选项
}
```

defineConfig 函数主要是在 TS 中用来获取类型提示的。

```ts
export default defineConfig({
  // 配置选项
})
```

更常见的格式是 defineConfig。

vite 配置的分类：

- 普通配置

    - 设置项目的基本信息

- 开发服务器的配置

- 构建配置

- 预览配置

- 依赖优化

    - 针对依赖预打包的配置

- SSR 配置

- Worker 配置

    - Web Worker 的配置

## 普通配置

### root

配置 index.html 的路径。

### define

定义一些全局的常量，不需要通用 import 导入，可以在代码中直接使用。

### resolve

resolve.alias 配置路径别名。

resolve.extensions 配置文件扩展名。可以自定义拓展名的顺序。

### css

#### postcss

可以是内联的 postcss 配置，也可以是一个 postcss 配置文件的路径。

#### preprocessorOptions

用于配置 css 预处理器的选项（less、sass、scss）。

#### preprocessorOptions[extension].additionalData

为 CSS 预处理器添加额外的代码。

#### preprocessorMaxWorkers

会尽可能的在 worker 线程中运行。

#### devSourceMap

开启 devSourceMap。

#### transformer

用于处理 CSS 的引擎。

### 开发服务器配置

#### host

配置服务器监听那个 IP 地址，默认是 localhost。

为什么需要更改 host?

除了 localhost 之外经常还需要设置 0.0.0.0 或者 true，表示监听所有的 IP 地址。

有些时候需要多设备来测试应用程序。例如通过电脑 A 启动开发服务器，然后通过手机 B 访问。默认的 localhost 只能在电脑 A 上访问，手机 B 无法访问。

#### port

监听的端口号。

#### strictPort

严格使用端口。如果端口被占用，则直接退出。

#### proxy

配置转发代理。

#### open

#### https

#### watch

用于配置要监听的文件。