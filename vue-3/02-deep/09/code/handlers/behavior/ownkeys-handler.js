import track from '../../effect/track.js';
import { trackOpTypes, isObject } from '../../utils.js';

export default function (target) {
  console.log('拦截到 iterate 操作', target);

  track(target, trackOpTypes.ITERATE);

  return Reflect.ownKeys(target);
}
