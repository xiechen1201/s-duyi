// 对 axios 进行封装
import axios from 'axios';

const request = axios.create({
    baseURL: 'http://localhost:3001', // 设置请求的基础地址
    timeout: 5000 // 设置请求超时时间
});

// 设置请求拦截
request.interceptors.request.use((config) => {
    // config 就是你的请求配置对象
    // 在发送请求之前做些什么
    return config;
});

// 设置响应拦截
request.interceptors.response.use(
    (response) => {
        // 响应成功进行处理
        return response;
    },
    (error) => {
        // 对错误进行处理
        return error;
    }
);


export default request;