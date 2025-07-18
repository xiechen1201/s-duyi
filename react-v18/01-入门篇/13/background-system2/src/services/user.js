import { request } from '@umijs/max';

/**
 * 分页获取用户信息
 */
function getUserByPageApi(params) {
  return request('/api/user', {
    method: 'GET',
    params: {
      ...params,
    },
  });
}

/**
 * 根据用户 id 获取用户详情
 */
function getUserByIdApi(userId) {
  return request(`/api/user/${userId}`, {
    method: 'GET',
  });
}

/**
 * 新增用户
 */
function addUserApi(newUserInfo) {
  newUserInfo.type = 'background';
  return request('/api/user', {
    method: 'POST',
    data: newUserInfo,
  });
}

/**
 * 根据 id 删除用户
 */
function deleteUserApi(userId) {
  return request(`/api/user/${userId}`, {
    method: 'DELETE',
  });
}

/**
 * 根据 id 修改用户
 */
function editUserApi(userId, newUserInfo) {
  return request(`/api/user/${userId}`, {
    method: 'PATCH',
    data: newUserInfo,
  });
}

export {
  addUserApi,
  deleteUserApi,
  editUserApi,
  getUserByIdApi,
  getUserByPageApi,
};
