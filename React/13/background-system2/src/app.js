/**
 * @description 运行时配置
 */
import { getAdminByIdApi, getInfoApi } from '@/services/admin';
import { message } from 'antd';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState() {
  let adminInfo = {};

  // 访问登录页
  if (location.pathname === '/login') {
    const token = localStorage.getItem('token');
    if (!token) {
      return false;
    }

    let result = await getInfoApi();
    if (result.code !== 0) {
      message.warning(result.msg);
    } else if (result.data) {
      location.pathname = '/';
      message.warning('请先退出登录！');
    }
  } else {
    // 访问系统内页面
    let result = await getInfoApi();
    if (result.code !== 0) {
      localStorage.removeItem('token');
      location.pathname = '/login';
    } else if (result.data) {
      let { data } = await getAdminByIdApi(result.data._id);
      return {
        name: data.nickname,
        avatar: data.avatar,
        adminInfo: data,
      };
    }
  }

  return { name: '@umijs/max', adminInfo };
}

// 配置布局
export const layout = () => {
  return {
    logo: 'https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-10-18-074620.png',
    menu: {
      locale: false,
    },
    logout: () => {
      localStorage.removeItem('token');
      location.pathname = '/login';
    },
  };
};

// 配置请求和响应拦截器
export const request = {
  timeout: 3000,
  requestInterceptors: [
    function (url, options) {
      const token = localStorage.getItem('token');
      if (token) {
        options.headers.Authorization = 'Bearer ' + token;
      }

      return {
        url,
        options,
      };
    },
  ],
};
