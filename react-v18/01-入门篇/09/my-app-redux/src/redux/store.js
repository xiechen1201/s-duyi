// 仓库文件
import { createStore } from 'redux';
import { todoReducer } from './reducers';

// 创建仓库，需要传入一个 reducer（纯函数，用于计算最新的状态）
export const store = createStore(
    todoReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

