/**
 * @description 评论相关的 API
 */
import request from './request';

// 根据问答的 id 获取对应的评论
export function getIssueCommentByIdApi(id, params) {
    return request({
        url: `/api/comment/issuecomment/${id}`,
        method: 'GET',
        params
    });
}

// 提交评论
export function addCommentApi(newComment) {
    return request({
        url: '/api/comment',
        method: 'POST',
        data: newComment
    });
}