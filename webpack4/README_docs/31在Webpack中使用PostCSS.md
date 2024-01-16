# 31 在 Webpack 中使用 PostCSS.md

```css
:root {
  --dangerColor: #f40;
}
```

代码并没有被 css-loader 和 style-loader 进行转换

需要使用 postcss 进行转换