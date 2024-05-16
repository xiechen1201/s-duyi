import { request } from '@umijs/max';

/**
 * 获取所有的管理员
 */
function getAdminApi() {
  return request('/api/admin', {
    method: 'GET',
  });
}

/**
 * 删除管理员
 */
function deleteAdminApi(adminId) {
  return request(`/api/admin/${adminId}`, {
    method: 'DELETE',
  });
}

/**
 * 修改管理员信息
 */
function editAdminApi(adminId, newAdminInfo) {
  return request(`/api/admin/${adminId}`, {
    method: 'PATCH',
    data: newAdminInfo,
  });
}

/**
 * 新增管理员
 */
function addAdminApi(newAdminInfo) {
  return request('/api/admin', {
    method: 'POST',
    data: newAdminInfo,
  });
}

/**
 * 根据 loginId 查找管理员
 */
function adminIsExistApi(loginId) {
  return request(`/api/admin/adminIsExist/${loginId}`, {
    method: 'GET',
  });
}

/**
 * 获取验证码
 */
function getCaptchaApi() {
  return request('/res/captcha', {
    method: 'GET',
  });
}

/**
 * 管理员登录
 */
function loginApi(loginInfo) {
  return request('/api/admin/login', {
    method: 'POST',
    data: loginInfo,
  });
}

/**
 * 恢复登录状态
 */
function getInfoApi() {
  return request('/api/admin/whoami', {
    method: 'GET',
  });
}

/**
 * 根据 id 获取管理员
 */
function getAdminByIdApi(adminId) {
  return request(`/api/admin/${adminId}`, {
    method: 'GET',
  });
}

export {
  addAdminApi,
  adminIsExistApi,
  deleteAdminApi,
  editAdminApi,
  getAdminApi,
  getAdminByIdApi,
  getCaptchaApi,
  getInfoApi,
  loginApi,
};
