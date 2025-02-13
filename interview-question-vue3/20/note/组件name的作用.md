# 组件name的作用

## 如何定义组件的 name

- Options API

    - 添加 name 选项即可

- Composition API

    - 多书写一个 <script> 标签，导出的仍然是一个对象，对象配置 name 即可

    - 使用 defineOptions 宏函数

## 组件 name 的作用

- 递归组件

- <keep-alive> 缓存

- vue-devtools 调试