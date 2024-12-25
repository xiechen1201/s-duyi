# any 和 unknown

any 类型是 TS 的兜底类型，相当于回归 JS 的原始状态。

unknown 类型是 TS 3.0 引入的，表示未知类型，比 any 更安全。

和 any 非常的相似，只不过没有 any 那么大的自由度，unknown 类型只能赋值给 unknown 或 any 类型。

简单的说，any 放弃了所有的类型检查，而 unknown 并没有。