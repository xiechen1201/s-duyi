import { effect } from "./effect/effect.js";
import track from "./effect/track.js";
import trigger from "./effect/tigger.js";
import { TrackOpTypes, TriggerOpTypes } from "./utils.js";

/**
 *
 * @param {*} getterOptions getter 函数或者包含 getter/setter 的对象
 */
export function computed(getterOptions) {
    // 参数归一化（多种形式的参数都处理成统一的格式）
    const { getter, setter } = normalizeParams(getterOptions);

    const effectFn = effect(getter, {
        lazy: true,
        shcheduler: () => {
            dirty = true;
            trigger(obj, TriggerOpTypes.SET, "value");
        }
    });

    let value;
    // 表示数据是否是脏值，如果是 true 表示数据是脏的，需要重新计算
    let dirty = true;

    const obj = {
        get value() {
            // 手动的收集依赖
            track(obj, TrackOpTypes.GET, "value");

            if (dirty) {
                value = effectFn();
                dirty = false;
            }
            return value;
        },
        set value(newValue) {
            setter(newValue);
        }
    };

    return obj;
}

// 参数归一化
function normalizeParams(getterOptions) {
    let getter, setter;

    if (typeof getterOptions === "function") {
        // 说明传递的是一个 getter 函数
        getter = getterOptions;
        setter = () => {
            console.warn("computed value must be readonly");
        };
    } else {
        // 说明传递的是一个包含 getter/setter 的对象
        getter = getterOptions.get;
        setter = getterOptions.set;
    }

    return {
        getter,
        setter
    };
}
