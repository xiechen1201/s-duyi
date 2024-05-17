import Router from './router/router';
import { NavLink } from 'react-router-dom';

function App() {
    return (
        <div className='container'>
            {/* 导航栏 */}
            <nav className='navbar navbar-inverse'>
                <div className='container'>
                    <div className='navbar-header'>
                        <button
                            type='button'
                            className='navbar-toggle collapsed'
                            data-toggle='collapse'
                            data-target='#navbar'
                            aria-expanded='false'
                            aria-controls='navbar'>
                            <span className='sr-only'>Toggle navigation</span>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                        </button>
                        <div className='navbar-brand'>学生管理系统</div>
                    </div>
                    <div id='navbar' className='collapse navbar-collapse'>
                        <ul className='nav navbar-nav'>
                            <NavLink to='/home' className='navigation'>
                                主页
                            </NavLink>
                            <NavLink to='/about' className='navigation'>
                                关于我们
                            </NavLink>
                        </ul>
                        <ul className='nav navbar-nav navbar-right'>
                            <li className='navbar-right'>
                                <NavLink to='/addOrEdit' className='navigation'>
                                    添加用户
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* 匹配路由组件的显示在这个位置 */}
            <div className='content'>
                <Router />
            </div>
        </div>
    );
}

export default App;
