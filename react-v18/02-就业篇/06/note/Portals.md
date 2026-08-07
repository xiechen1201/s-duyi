# Portals

模态框渲染在 app 元素下面，会被样式影响。

Portals 元素冒泡仍然会冒泡到 app 组件上，是按照组件树来冒泡的，而不是渲染树。

```
 const handleClick = () => {
    console.log("App 组件被点击了");
  };
```