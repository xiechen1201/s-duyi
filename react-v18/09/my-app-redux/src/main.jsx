import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './redux/store.js';
import App from './App.jsx';
import './style/main.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

render();
function render() {
    // 挂载 store
    root.render(<App store={store} />);
}

// 在仓库的状态发生改变的时候触发 subscribe（订阅）
store.subscribe(render);
