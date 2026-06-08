import { request } from 'umi';

/**
 * 分页获取书籍
 */
function getBookByPageApi(params) {
  return request('/api/book', {
    method: 'GET',
    params: {
      ...params,
    },
  });
}

/**
 * 根据 id 获取书籍详情
 */
function getBookByIdApi(bookId) {
  return request(`/api/book/${bookId}`, {
    method: 'GET',
  });
}

/**
 * 新增书籍
 */
function addBookApi(newBookInfo) {
  return request('/api/book', {
    method: 'POST',
    data: newBookInfo,
  });
}

/**
 * 根据 id 删除书籍
 */
function deleteBookApi(bookId) {
  return request(`/api/book/${bookId}`, {
    method: 'DELETE',
  });
}

/**
 * 根据 id 编辑书籍
 */
function editBookApi(bookId, newBookInfo) {
  return request(`/api/book/${bookId}`, {
    method: 'PATCH',
    data: newBookInfo,
  });
}

export {
  addBookApi,
  deleteBookApi,
  editBookApi,
  getBookByIdApi,
  getBookByPageApi,
};
