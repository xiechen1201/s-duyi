import tigger from "../../effect/tigger.js";
import { TriggerOpTypes } from "../../utils.js";

export default function (target, key) {
    
    // 如何删除的是一个不存在的属性，则不进行执行触发器
    const hasKey = target.hasOwnProperty(key);
    const result = Reflect.deleteProperty(target, key);

    if(hasKey){
        // 执行触发器
        tigger(target, TriggerOpTypes.DELETE, key);
    }

    return result;
}
