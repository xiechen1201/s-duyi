/* 
    说白了就是一个注释，只能出现在文件的顶部
    功能类似于 import 导入
    参数:
        path
        types
        lib
    
    什么时候使用呢？
    .d.ts 文件中的类型是全局的，如果想要依赖其他的声明文件，但是又不能出现模块化的语法，就可以使用三斜指令
*/

const user: User = {
    career: {
        id: 1,
        name: "teacher"
    }
};
