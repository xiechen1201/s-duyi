import track from '../../effect/track.js';
import { trackOpTypes, isObject } from '../../utils.js';

export default function (target, key) {
  console.log('拦截到 has 操作：', key);

  track(target, trackOpTypes.HAS, key);
  return Reflect.has(target, key);
}
