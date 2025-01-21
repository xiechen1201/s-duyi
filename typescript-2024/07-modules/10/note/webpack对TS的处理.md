# webpack 对 TS 的处理

需要 ts-loader 对 TS 进行处理，内部会调用 TS 的 API 解析 TS 文件 ==> JS ==> webpack 进行打包。

ts-loader 会检查并解析 TS 文件。

ts-loader 打包的时候会再次检查 TS，会有点多次一举，因为 vscode 编辑器已经检查过了。

babel-loader 也可以对 TS 进行处理，但是需要配置 @babel/preset-typescript，仅仅是进行转译，不会检查 TS。