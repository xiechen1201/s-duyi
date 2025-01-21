import track from "../../effect/track.js";
import { TrackOpTypes } from "../../utils.js";

export default function (target) {
    const result = Reflect.ownKeys(target);

    // 执行依赖收集
    track(target, TrackOpTypes.ITERATE);

    return result;
}
