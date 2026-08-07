import { PureComponent } from "react";
import ChildCom1 from "./components/ChildCom1";
import ChildCom3 from "./components/ChildCom3";
import TodoList from "./components/TodoList";

export default class App extends PureComponent {
  state = {
    counter: 1
  };

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

        <hr />
        
        <ChildCom1 />

        <ChildCom3 />

        <hr />

        <TodoList />
      </div>
    );
  }
}
