import axios from 'axios';
import { message } from 'antd';

const request = axios.create({
    baseURL: '',
    timeout: 5000,
    withCredentials: true
});

// 请求拦截
request.interceptors.request.use(
    (config) => {
        // 设置请求头 token
        const TOKEN = localStorage.getItem('token') || '';
        if (TOKEN) {
            config.headers.Authorization = 'Bearer ' + TOKEN;
        }

        return config;
    },
    (error) => console.log('request error:', error)
);

// 响应拦截
request.interceptors.response.use(
    (response) => {
        if (response.status >= 200 || response.status < 400) {
            // 如果 response.data 是个对象
            if (response.data && response.data instanceof Object) {
                // 如果 code 不为 0
                if (response.data.code !== 0) {
                    message.warning(response.data.msg);
                    return Promise.reject(response.data.msg);
                } else {
                    return response.data.data;
                }
            } else {
                return response.data;
            }
        } else {
            return Promise.reject('error');
        }
    },
    (error) => console.log('response error:', error)
);

export default request;
