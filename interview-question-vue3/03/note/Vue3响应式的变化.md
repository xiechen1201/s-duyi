# Vue3 响应式的变化

- 响应式的变化

    - 共同点

        - 对对象进行拦截

        - 深度拦截

    - 不同点

        - （拦截广度）Object.defineProperty 针对对象「属性」的「读写」操作

        - 多数场景下 Proxy 的性能优于 Object.defineProperty

- 创建响应式的方式

- 依赖收集的变化
