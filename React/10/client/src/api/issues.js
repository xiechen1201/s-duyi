/**
 * @description 问答相关的 API
 */

import request from './request';

// 获取问答列表
export function getIssueByPageApi(params) {
    return request({
        url: '/api/issue',
        method: 'GET',
        params
    });
}

// 新增问答
export function addIssueApi(data) {
    return request({
        url: '/api/issue/',
        method: 'POST',
        data
    });
}

// 根据 id 获取面试题的详情
export function getIssueByIdApi(issueId) {
    return request({
        url: `/api/issue/${issueId}`,
        method: 'GET'
    });
}

// 更新问答
export function updateIssueApi(issueId, newIssueInfo) {
    return request({
        url: `/api/issue/${issueId}`,
        method: 'PATCH',
        data: newIssueInfo
    });
}
