import request from './request';

/**
 * @description 用户相关的 API
 */

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
