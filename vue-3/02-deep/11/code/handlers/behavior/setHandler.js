import tigger from "../../effect/tigger.js";
import { TriggerOpTypes, hasChanged } from "../../utils.js";

export default function (target, key, value) {
    // console.log(`>>> 触发 set 操作，Key 为 ${key}，Value 为 ${value}`);

    // 进一步判断是 set 还是 add
    const type = target.hasOwnProperty(key)
        ? TriggerOpTypes.SET
        : TriggerOpTypes.ADD;

    // 如果 value 没有变，则不需要进行触发器
    const oldValue = target[key];
    // 缓存数组旧的长度
    const oldLength = Array.isArray(target) ? target.length : undefined;
    const result = Reflect.set(target, key, value);

    if (!hasChanged(oldValue, value)) {
        // 执行触发器
        tigger(target, type, key);

        // 如果数组的 length 被改变
        if (Array.isArray(target) && oldLength !== target.length) {
            // 如果显式新增 length 的时候，则不触发派发器
            if (key !== "length") {
                tigger(target, TriggerOpTypes.SET, "length");
            } else {
                // 如果长度小于旧的长度，则触发删除派发器
                for (let i = target.length; i < oldLength; i++) {
                    tigger(target, TriggerOpTypes.DELETE, i);
                }
            }
        }
    }

    return result;
}
