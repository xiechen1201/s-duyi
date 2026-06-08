import { request } from 'umi';

/**
 * 获取类型列表
 */
function getTypeApi() {
  return request('/api/type', {
    method: 'GET',
  });
}

/**
 * 新增类型
 */
function addTypeApi(newTypeInfo) {
  return request('/api/type', {
    method: 'POST',
    data: newTypeInfo,
  });
}

/**
 * 根据 id 删除类型
 */
function deleteTypeApi(typeId) {
  return request(`/api/type/${typeId}`, {
    method: 'DELETE',
  });
}

/**
 * 根据 id 修改类型
 */
function editTypeApi(typeId, newTypeInfo) {
  return request(`/api/type/${typeId}`, {
    method: 'PATCH',
    data: newTypeInfo,
  });
}

export { addTypeApi, deleteTypeApi, editTypeApi, getTypeApi };
