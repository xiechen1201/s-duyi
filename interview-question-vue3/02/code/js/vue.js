import { observer, compile } from "./utils.js";

export default class Vue {
  constructor(options) {
    this.$el = options.el;
    // 需要对数据进行劫持
    observer(this, options.data);
    compile(this);
  }
}
