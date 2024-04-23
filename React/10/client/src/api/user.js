/**
 * @description 用户相关的 API
 */

import request from './request';

// 获取验证码
export function getCaptchaApi() {
    return request({
        url: '/res/captcha',
        method: 'GET'
    });
}

// 查询用户是否存在
export function userIsExistApi(loginId) {
    return request({
        url: `/api/user/userIsExist/${loginId}`,
        method: 'GET'
    });
}

// 用户注册
export function addUserApi(newUserInfo) {
    return request({
        url: '/api/user',
        data: newUserInfo,
        method: 'POST'
    });
}

// 用户登录
export function userLoginApi(loginInfo) {
    return request({
        url: '/api/user/login',
        method: 'POST',
        data: loginInfo
    });
}

// 根据 id 来查找用户
export function getUserByIdApi(id) {
    return request({
        url: `/api/user/${id}`,
        method: 'GET'
    });
}

// 恢复登录状态
export function getInfoApi() {
    return request({
        url: '/api/user/whoami',
        method: 'GET'
    });
}
