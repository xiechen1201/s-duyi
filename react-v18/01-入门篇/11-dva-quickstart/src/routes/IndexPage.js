import React from "react";
import { connect } from "dva";
import { NavLink, Switch, Route } from "dva/router";
import styles from "../style/index.css";

import Home from "./Home";
import About from "./About";
import AddOrEdit from "./AddOrEdit";
import Detail from "./Detail";

function IndexPage() {
  return (
    <div className="container">
      {/* 导航栏 */}
      <nav className="navbar navbar-inverse">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <div className="navbar-brand">学生管理系统</div>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <NavLink to="/home" className={styles.navigation}>
                主页
              </NavLink>
              <NavLink to="/about" className={styles.navigation}>
                关于我们
              </NavLink>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li className="navbar-right">
                <NavLink to="/addOrEdit" className={styles.navigation}>
                  添加用户
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* 匹配路由组件的显示在这个位置 */}
      <div className="content">
        <Switch>
          {/* 在 Routes 中书写对应的路由，以及路由对应的组件 */}
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/addOrEdit" element={<AddOrEdit />} />
          <Route path="/edit/:id" element={<AddOrEdit />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Switch>
      </div>
    </div>
  );
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
