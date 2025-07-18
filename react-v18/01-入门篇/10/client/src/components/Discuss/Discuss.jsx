import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserInfoAsync } from '../../redux/userSlice';
import { getIssueCommentByIdApi, addCommentApi } from '../../api/comment';
import { getUserByIdApi } from '../../api/user';
import { updateIssueApi } from '../../api/issues';

import { Avatar, Button, Form, List, Col, Row, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';
// Editor 详见：https://ui.toast.com/tui-editor
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

function Discuss(props) {
    let dispatch = useDispatch();

    let { userInfo, isLogin } = useSelector((state) => state.user);
    let editorRef = useRef(null);

    let [commentList, setCommentList] = useState([]);
    let [refresh, setRefresh] = useState(0);
    let [page, setPage] = useState({
        current: 1,
        pageSize: 10,
        total: 0
    });

    useEffect(() => {
        if (props.targetId) {
            getIssueCommentList();
        }

        async function getIssueCommentList() {
            let dataList = [];

            if (props.commentType === 1) {
                // 获取问答的评论
                try {
                    let result = await getIssueCommentByIdApi(props.targetId, {
                        current: page.current,
                        pageSize: page.pageSize
                    });

                    dataList = result.data;
                    setPage({
                        current: page.current,
                        pageSize: page.pageSize,
                        total: result.count
                    });
                } catch (error) {}
            } else {
                // 获取文章的评论
                try {
                } catch (error) {}
            }

            // 遍历获取用户的头像
            for (const iterator of dataList) {
                try {
                    let result = await getUserByIdApi(iterator.userId);
                    iterator.avatar = result.avatar;
                } catch (error) {}
            }
            setCommentList(dataList);
        }
    }, [props.targetId, page.current, refresh]);

    function onClickBtn() {
        let markDownContent = editorRef.current.getInstance().getMarkdown();
        let htmlContnent = editorRef.current.getInstance().getHTML();

        if (!markDownContent) {
            return message.warning('评论内容不能为空！');
        }

        // 问答、书籍的评论
        addCommentApi({
            userId: userInfo._id,
            typeId:
                props.commentType === 1 ? props.issueInfo.typeId : props.bookInfo.typeId,
            commentType: props.commentType,
            issueId: props.targetId,
            commentContent: htmlContnent,
            bookId: null
        })
            .then(() => {
                message.success('评论成功！');
                setRefresh(refresh + 1);
                editorRef.current.getInstance().reset();

                // 更新问题的评论数
                updateIssueApi(props.targetId, {
                    commentNumber:
                        props.commentType === 1
                            ? props.issueInfo.commentNumber + 1
                            : props.bookInfo.commentNumber
                });
                // 更新积分
                dispatch(
                    updateUserInfoAsync({
                        userId: userInfo._id,
                        newInfo: {
                            points: userInfo.points + 1
                        }
                    })
                );
            })
            .catch((err) => {});
    }

    function onChangePage(newCurrent) {
        setPage({
            current: newCurrent,
            pageSize: page.pageSize,
            total: page.total
        });
    }

    let avatarDOM = isLogin ? (
        <Avatar src={'/img/' + userInfo.avatar} />
    ) : (
        <Avatar src={<UserOutlined />} />
    );

    return (
        <>
            {/* 评论框 */}
            <Row>
                <Col span={1}>{avatarDOM}</Col>
                <Col span={23}>
                    <Form.Item>
                        <Editor
                            ref={editorRef}
                            initialValue=''
                            previewStyle='vertical'
                            height='200px'
                            initialEditType='wysiwyg'
                            useCommandShortcut={true}
                            language='zh-CN'
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type='primary' disabled={!isLogin} onClick={onClickBtn}>
                            提交
                        </Button>
                    </Form.Item>
                </Col>
            </Row>
            {/* 评论列表 */}
            <List
                header={<div>评论列表</div>}
                itemLayout='horizontal'
                dataSource={commentList}
                pagination={{
                    align: 'center',
                    current: page.current,
                    pageSize: page.pageSize,
                    total: page.total,
                    onChange: onChangePage
                }}
                renderItem={(item, index) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src={'/img/' + item.avatar} />}
                            title={item.userId}
                            description={
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: item.commentContent
                                    }}></p>
                            }
                        />
                    </List.Item>
                )}
            />
        </>
    );
}

export default Discuss;
