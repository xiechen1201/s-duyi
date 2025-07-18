import React from 'react';
import { Button, message } from 'antd';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function AddIssueBtn(props) {
    const { isLogin } = useSelector((state) => state.user);
    const navigate = useNavigate();

    function onClickBtn() {
        if (isLogin) {
            navigate('/addIssue');
        } else {
            message.error('请先登录');
        }
    }

    return (
        <Button
            type='primary'
            size='large'
            style={{
                width: '100%',
                marginBottom: '30px'
            }}
            onClick={onClickBtn}>
            我要发问
        </Button>
    );
}

export default AddIssueBtn;
