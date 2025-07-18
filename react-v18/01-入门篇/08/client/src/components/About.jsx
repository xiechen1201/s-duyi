import React from 'react';
import { NavLink,Outlet } from 'react-router-dom';

function About(props) {
    return (
        <div className='about container'>
            <h1 className='page-header'>使用说明</h1>
            <p>通过此系统来熟悉 React 和 react-router-dom 的使用</p>
            <p>联系方式</p>
            <NavLink to='/about/email'>邮箱</NavLink>
            <NavLink to='/about/tel'>电话</NavLink>
            <Outlet />
        </div>
    );
}

export default About;
