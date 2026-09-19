# useCallback 和 useMemo

## useCallback

基本用法：

（代码）

得到一个缓存函数，会在 a 或者 b 依赖项发生变化的时候才会更新。

1、mount 阶段

mount 阶段执行的就是 mountCallback，代码如下：

（代码）

2、update 阶段

## useMemo

基本用法：

（代码）

1、mount 阶段

mount 阶段首先得到一个 hook 对象，之后执行传入的函数，得到计算值，将计算值和依赖项存储到 hook 对象的 memoizedState 中，最后向外部返回计算得到的值。

2、update 阶段

首先仍然是从 updateWorkInProgressHook 中获取 hook 对象，从而获取到之前的依赖项目，然后和新传入的依赖项目进行对比，如果依赖没有变化，则返回之前的计算值。

否则就执行传入的函数，重新进行计算，最后向外部返回新的计算值。