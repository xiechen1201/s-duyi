# 47 Bundle 分析

简单说就是对打包的结果进行分析，本身不会进行优化，只是让我们间接的进行打包分析进行优化。

```js
module.exports = {
  mode: "production",
  plugins: [
    new CleanWebpackPlugin(),
    new webpackBundleAnalyzer.BundleAnalyzerPlugin({
      analyzerMode: "static"
    })
  ]
};
```

- analyzerMode

    - server，默认值，启动一个服务器查看编译的结果

    - static，生成一个 html 文件，在浏览器中查看编译的结果

    
![](../README_files/iShot_2023-11-01_16.22.25.png)

只是相对大小，太小的模块可能不会显示了

三种结果：

- stat size，输入结果，没有打包的时候的大小

- parsed, 打包后的结果

- gizp，经过 gzip 的大小

根据结果来决定是否要进行分包