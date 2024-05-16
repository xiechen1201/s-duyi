// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import React from 'react';

export async function getRoutes() {
  const routes = {"1":{"path":"/","redirect":"/home","parentId":"ant-design-pro-layout","id":"1"},"2":{"name":"首页","path":"/home","icon":"HomeOutlined","parentId":"ant-design-pro-layout","id":"2"},"3":{"name":"管理员","path":"/admin","icon":"UserOutlined","parentId":"ant-design-pro-layout","id":"3"},"4":{"name":"管理员列表","path":"adminList","parentId":"3","id":"4"},"5":{"name":"添加管理员","path":"addAdmin","parentId":"3","id":"5"},"6":{"name":"用户","path":"/user","icon":"TeamOutlined","parentId":"ant-design-pro-layout","id":"6"},"7":{"name":"用户列表","path":"userList","parentId":"6","id":"7"},"8":{"name":"添加用户","path":"addUser","parentId":"6","id":"8"},"9":{"name":"书籍","path":"/book","icon":"ReadOutlined","parentId":"ant-design-pro-layout","id":"9"},"10":{"name":"书籍列表","path":"bookList","parentId":"9","id":"10"},"11":{"name":"添加书籍","path":"addBook","parentId":"9","id":"11"},"12":{"name":"面试题","path":"/interview","icon":"EditOutlined","parentId":"ant-design-pro-layout","id":"12"},"13":{"name":"问答","path":"/issue","icon":"ProfileOutlined","parentId":"ant-design-pro-layout","id":"13"},"14":{"name":"评论","path":"/comment","icon":"CalendarOutlined","parentId":"ant-design-pro-layout","id":"14"},"15":{"name":"类型","path":"/type","icon":"AppstoreOutlined","parentId":"ant-design-pro-layout","id":"15"},"ant-design-pro-layout":{"id":"ant-design-pro-layout","path":"/","isLayout":true}} as const;
  return {
    routes,
    routeComponents: {
'1': React.lazy(() => import('./EmptyRoute')),
'2': React.lazy(() => import(/* webpackChunkName: "p__Home__index" */'@/pages/Home/index.jsx')),
'3': React.lazy(() => import('./EmptyRoute')),
'4': React.lazy(() => import(/* webpackChunkName: "p__Admin__index" */'@/pages/Admin/index.jsx')),
'5': React.lazy(() => import(/* webpackChunkName: "p__Admin__addAdmin" */'@/pages/Admin/addAdmin.jsx')),
'6': React.lazy(() => import('./EmptyRoute')),
'7': React.lazy(() => import(/* webpackChunkName: "p__User__index" */'@/pages/User/index.jsx')),
'8': React.lazy(() => import(/* webpackChunkName: "p__User__addUser" */'@/pages/User/addUser.jsx')),
'9': React.lazy(() => import('./EmptyRoute')),
'10': React.lazy(() => import(/* webpackChunkName: "p__Book__index" */'@/pages/Book/index.jsx')),
'11': React.lazy(() => import(/* webpackChunkName: "p__Book__addBook" */'@/pages/Book/addBook.jsx')),
'12': React.lazy(() => import(/* webpackChunkName: "p__Interview__index" */'@/pages/Interview/index.jsx')),
'13': React.lazy(() => import(/* webpackChunkName: "p__Issue__index" */'@/pages/Issue/index.jsx')),
'14': React.lazy(() => import(/* webpackChunkName: "p__Comment__index" */'@/pages/Comment/index.jsx')),
'15': React.lazy(() => import(/* webpackChunkName: "p__Type__index" */'@/pages/Type/index.jsx')),
'ant-design-pro-layout': React.lazy(() => import(/* webpackChunkName: "t__plugin-layout__Layout" */'/Users/xiechen/Documents/code-personal/s-duyi/React/13/background-system2/src/.umi-production/plugin-layout/Layout.tsx')),
},
  };
}
