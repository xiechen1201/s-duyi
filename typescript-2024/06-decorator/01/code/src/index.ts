/* 
    装饰器是面向对象的概念。
    Java-注解 C#-特性 JavaScript-装饰器

    JavaScript 本身就支持的内容，在 ES6 中加入的，但是是实验性的，目前为止（2024）还没有被正式纳入标准。

    在如今前端更加注重的是函数式编程，而不是面向对象编程，所以装饰器在 JavaScript 中用的比较少。
    ESM + Webpack/Vite 可以实现 Tree shaking，所以类在前端中用的比较少。

    AngularJS/Nest/鸿蒙 中大量使用了装饰器，所以前端开发者有必要了解一下装饰器。
*/

/* 
    装饰器的作用：是一种结构设计模式，可以通过将对象置于包含行为的特殊包装对象中，可以将新的行为附加到对象上。
    装饰器模式在架构上来说，有的时候还不够方便。

    描述一个属性的时候，是可以描述这个属性的类型的，这是不够的，所以希望能够对属性信息多附加一些信息。
    把信息进行装饰一下，这个就是装饰器。

    1、关注点分离
    2、代码重复

    这两个问题产生的根源就是我们再定义某些信息的时候，能够附加的信息有限，如果能够这些信息装饰一下，添加上有用的信息，就可以处理了，这就是装饰器。
    装饰器的作用：为某些属性、方法（方法参数），类提供元数据信息 metadata
    元数据：描述数据的数据。
*/

class User {
    @required;
    @Range(3,5);
    @description("账号"); // 这些就是元数据
    id: number;
}
