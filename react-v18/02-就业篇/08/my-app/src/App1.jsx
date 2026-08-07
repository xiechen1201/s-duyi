import { Component } from "react";
import { shallowCompare } from "./utils";

export default class App extends Component {
  state = {
    counter: 1
  };

  // 返回 true 就会重新渲染（默认值），false 则不会重渲染
  /**
   * @param {*} nextProps 新的 props
   * @param {*} nextState 新的 state
   * @returns
   */
  shouldComponentUpdate(nextProps, nextState) {
    // 将当前 props、state 和 新的 props、state 对比，判断是否有变化
    if (
      shallowCompare(this.props, nextProps) &&
      shallowCompare(this.state, nextState)
    ) {
      return false;
    }
    return true;
  }

  render() {
    console.log("App 组件渲染了～");
    return (
      <div>
        App组件：
        <div>{this.state.counter}</div>
        <button
          onClick={() =>
            this.setState({
              // counter: this.state.counter + 1
              // 设置为 1 也会导致重渲染
              counter: 1
            })
          }>
          增加
        </button>
      </div>
    );
  }
}
