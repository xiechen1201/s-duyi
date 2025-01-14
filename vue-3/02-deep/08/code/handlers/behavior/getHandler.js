import track from "../../effect/track.js";
import { TrackOpTypes, isObject } from "../../utils.js";
import { reactive } from "../../reactive.js";

export default function (target, key) {
    // console.log(`>>> 触发 get 操作，Key 为 ${key}`);

    // 拦截到数据后要进行依赖收集
    track(target, TrackOpTypes.GET, key);

    const result = Reflect.get(target, key);

    // 如果得到的值是对象，则递归转换为响应式数据
    if (isObject(result)) {
        return reactive(result);
    }

    return result;
}
