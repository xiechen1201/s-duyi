import React, { useRef, useState, useEffect } from 'react';
import { Form, Input, Select, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getTypeList } from '../../redux/typeSlice';
// Editor 详见：https://ui.toast.com/tui-editor
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

import { typeOptionCreator } from '../../utils/index';
import { addIssueApi } from '../../api/issues';
import AddIssueStyle from './AddIssue.module.css';

function AddIssue(props) {
    let dispatch = useDispatch();
    let navigate = useNavigate();

    let formRef = useRef(null);
    let editorRef = useRef(null);

    let { typeList } = useSelector((state) => state.type);
    let { userInfo } = useSelector((state) => state.user);
    let [issueInfo, setIssueInfo] = useState({
        issueTitle: '',
        typeId: '',
        issueContent: '',
        userId: ''
    });

    useEffect(() => {
        if (typeList.length === 0) {
            dispatch(getTypeList());
        }
    }, []);

    function updateInfo(newVal, key) {
        const newData = { ...issueInfo };
        newData[key] = newVal;
        setIssueInfo(newData);
    }

    function onFinish() {
        let content = editorRef.current.getInstance().getHTML();

        addIssueApi({
            ...issueInfo,
            issueContent: content,
            userId: userInfo._id
        })
            .then((res) => {
                console.log(res);
                navigate('/');
                message.success('你的问题已提交，审核通过后将会进行展示！');
            })
            .catch(() => {});
    }

    return (
        <div className={AddIssueStyle.container}>
            <Form
                ref={formRef}
                labelCol={{
                    span: 4
                }}
                wrapperCol={{
                    span: 20
                }}
                onFinish={onFinish}>
                {/* 标题 */}
                <Form.Item
                    label='标题'
                    name='issueTitle'
                    rules={[
                        {
                            required: true,
                            message: '请输入标题!'
                        }
                    ]}>
                    <Input
                        value={issueInfo.issueTitle}
                        onChange={(event) => updateInfo(event.target.value, 'issueTitle')}
                        placeholder='请输入标题'
                    />
                </Form.Item>

                {/* 问题分类 */}
                <Form.Item
                    label='问题分类'
                    name='typeId'
                    rules={[
                        {
                            required: true,
                            message: '请选择所属的分类!'
                        }
                    ]}>
                    <Select
                        value={issueInfo.typeId}
                        onChange={(value) => updateInfo(value, 'typeId')}
                        placeholder='请选择类型'>
                        {typeOptionCreator(Select, typeList)}
                    </Select>
                </Form.Item>

                {/* 编辑器 */}
                <Form.Item
                    label='问题分类'
                    name='issueContent'
                    rules={[
                        {
                            required: true,
                            message: '请输入内容!'
                        }
                    ]}>
                    <Editor
                        ref={editorRef}
                        initialValue=''
                        previewStyle='vertical'
                        height='600px'
                        initialEditType='wysiwyg'
                        useCommandShortcut={true}
                        language='zh-CN'
                    />
                </Form.Item>

                {/* 确认按钮 */}
                <Form.Item wrapperCol={{ offset: 4, span: 20 }}>
                    <Button type='primary' htmlType='submit'>
                        确认新增
                    </Button>
                    <Button type='link' htmlType='submit' className='resetBtn'>
                        重置
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default AddIssue;
