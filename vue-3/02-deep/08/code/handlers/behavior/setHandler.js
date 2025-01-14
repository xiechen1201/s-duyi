import tigger from "../../effect/tigger.js";
import { TriggerOpTypes, hasChanged } from "../../utils.js";

export default function (target, key, value) {
    // console.log(`>>> 触发 set 操作，Key 为 ${key}，Value 为 ${value}`);

    // 进一步判断是 set 还是 add
    const type = target.hasOwnProperty(key) ? TriggerOpTypes.SET : TriggerOpTypes.ADD;

    // 如果 value 没有变，则不需要进行触发器
    const oldValue = target[key];
    const result = Reflect.set(target, key, value);
    if (!hasChanged(oldValue, value)) {
        // 执行触发器
        tigger(target, type, key);
    }

    return result;
}
