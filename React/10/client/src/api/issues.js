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
