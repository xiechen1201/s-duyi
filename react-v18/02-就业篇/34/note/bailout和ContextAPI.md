# bailout 和 ContextAPI

ContextAPI 经历过一次重构，重构的原因和 bailout 策略相关。

在旧版的 ContextAPI 中，数据是保存在栈里面的。

在 beginWork 中 Context 会不断的入栈（context 栈），这意味着 context consumer 可以通过 context 栈找到对应的 context 数据。

