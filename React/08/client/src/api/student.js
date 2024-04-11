// 封装我们的请求函数
import request from './request';

/**
 * @description 获取学生列表
 * @param {*} params
 * @returns
 */
export function getStudentListAPI(params) {
    return request({
        url: '/students',
        method: 'GET',
        params
    });
}

/**
 * @description 添加学生
 * @param {*} data
 */
export function addStudentAPI(data) {
    return request({
        url: '/students',
        method: 'POST',
        data
    });
}

/**
 * @description 获取学生详细信息
 * @param {*} id
 * @returns
 */
export function getStudentDetailAPI(id) {
    return request({
        url: `/students/${id}`,
        method: 'GET'
    });
}

/**
 * @description 删除学生信息
 * @param {*} id
 * @returns
 */
export function delStudentAPI(id) {
    return request({
        url: `/students/${id}`,
        method: 'DELETE'
    });
}

/**
 * @description 更新学生信息
 * @param {*} id
 * @param {*} data
 * @returns
 */
export function updateStudentAPI(id, data) {
    return request({
        url: `/students/${id}`,
        method: 'PATCH',
        data
    });
}
