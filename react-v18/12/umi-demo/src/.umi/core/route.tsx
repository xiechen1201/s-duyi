// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import React from 'react';

export async function getRoutes() {
  const routes = {"user/index":{"path":"user","id":"user/index","parentId":"@@/global-layout"},"user/$id":{"path":"user/:id","id":"user/$id","parentId":"@@/global-layout"},"index":{"path":"/","id":"index","parentId":"@@/global-layout"},"docs":{"path":"docs","id":"docs","parentId":"@@/global-layout"},"test":{"path":"test","id":"test","parentId":"@@/global-layout"},"@@/global-layout":{"id":"@@/global-layout","path":"/","isLayout":true}} as const;
  return {
    routes,
    routeComponents: {
'user/index': React.lazy(() => import(/* webpackChunkName: "src__pages__user__index" */'../../../src/pages/user/index.tsx')),
'user/$id': React.lazy(() => import(/* webpackChunkName: "src__pages__user__$id" */'../../../src/pages/user/$id.jsx')),
'index': React.lazy(() => import(/* webpackChunkName: "src__pages__index" */'../../../src/pages/index.tsx')),
'docs': React.lazy(() => import(/* webpackChunkName: "src__pages__docs" */'../../../src/pages/docs.tsx')),
'test': React.lazy(() => import(/* webpackChunkName: "src__pages__test" */'../../../src/pages/test.tsx')),
'@@/global-layout': React.lazy(() => import(/* webpackChunkName: "layouts__index" */'/Users/xiechen/Documents/code-personal/s-duyi/React/12/umi-demo/src/layouts/index.tsx')),
},
  };
}