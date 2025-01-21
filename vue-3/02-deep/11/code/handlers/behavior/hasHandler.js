import track from "../../effect/track.js";
import { TrackOpTypes } from "../../utils.js";

export default function (target, key) {
    const result = Reflect.has(target, key);

    // 进行依赖收集
    track(target, TrackOpTypes.HAS, key);

    return result;
}
