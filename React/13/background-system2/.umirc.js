import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  dva: {},
  layout: {
    title: 'coder station',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/login',
      component: './Login/index',
      menuRender: false,
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
      icon: 'HomeOutlined',
      access: 'NormalAdmin',
    },
    {
      name: '管理员',
      path: '/admin',
      icon: 'UserOutlined',
      access: 'SuperAdmin',
      routes: [
        {
          name: '管理员列表',
          path: 'adminList',
          component: './Admin/index',
        },
        {
          name: '添加管理员',
          path: 'addAdmin',
          component: './Admin/addAdmin',
        },
      ],
    },
    {
      name: '用户',
      path: '/user',
      icon: 'TeamOutlined',
      access: 'NormalAdmin',
      routes: [
        {
          name: '用户列表',
          path: 'userList',
          component: './User/index',
        },
        {
          name: '添加用户',
          path: 'addUser',
          component: './User/addUser',
        },
        {
          name: '编辑用户',
          path: 'editUser/:id',
          component: './User/editUser',
          hideInMenu: true,
        },
      ],
    },
    {
      name: '书籍',
      path: '/book',
      icon: 'ReadOutlined',
      access: 'NormalAdmin',
      routes: [
        {
          name: '书籍列表',
          path: 'bookList',
          component: './Book/index',
        },
        {
          name: '添加书籍',
          path: 'addBook',
          component: './Book/addBook',
        },
        {
          name: '编辑书籍',
          path: 'editBook/:id',
          component: './Book/editBook',
          hideInMenu: true,
        },
      ],
    },
    {
      name: '面试题',
      path: '/interview',
      component: './Interview',
      icon: 'EditOutlined',
      access: 'NormalAdmin',
    },
    {
      name: '问答',
      path: '/issue',
      component: './Issue',
      icon: 'ProfileOutlined',
      access: 'NormalAdmin',
    },
    {
      name: '评论',
      path: '/comment',
      component: './Comment',
      icon: 'CalendarOutlined',
      access: 'NormalAdmin',
    },
    {
      name: '类型',
      path: '/type',
      component: './Type',
      icon: 'AppstoreOutlined',
      access: 'NormalAdmin',
    },
  ],
  npmClient: 'npm',
  proxy: {
    '/api': {
      target: 'http://localhost:7001',
      changeOrigin: true,
    },
    '/static': {
      target: 'http://localhost:7001',
      changeOrigin: true,
    },
    '/res': {
      target: 'http://localhost:7001',
      changeOrigin: true,
    },
  },
});
