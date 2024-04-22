import axios from 'axios';

const request = axios.create({
    baseURL: '',
    timeout: 5000,
    withCredentials: true
});

// 请求拦截
request.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => console.log('request error:', error)
);

// 响应拦截
request.interceptors.response.use(
    (response) => {
        if (response.status >= 200 || response.status < 400) {
            return response.data;
        } else {
            return Promise.reject("error");
        }
    },
    (error) => console.log('response error:', error)
);

export default request;
