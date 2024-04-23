import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, List, Popover, Avatar, Image } from 'antd';
import { changeLoginStatus, clearUserInfo } from '../../redux/userSlice';
import LoginAvatarStyle from './LoginAvatar.module.css';

function LoginAvatar(props) {
    const dispath = useDispatch();
    const { isLogin, userInfo } = useSelector((state) => state.user);

    function onClickListItem(data) {
        if (data === '个人中心') {
            // TODO:跳转到个人中心页面
        } else if (data === '退出登录') {
            localStorage.removeItem('token');
            dispath(changeLoginStatus(false));
            dispath(clearUserInfo());
        }
    }

    let loginStatus = null;
    if (isLogin) {
        const PopoverContent = (
            <List
                dataSource={['个人中心', '退出登录']}
                size='large'
                renderItem={(item) => (
                    <List.Item
                        style={{ cursor: 'pointer' }}
                        onClick={() => onClickListItem(item)}>
                        {item}
                    </List.Item>
                )}
            />
        );

        loginStatus = (
            <Popover content={PopoverContent} trigger='hover'>
                <div className={LoginAvatarStyle.avatarContainer}>
                    <Avatar
                        src={<Image src={'/img' + userInfo.avatar} />}
                        style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>
                        U
                    </Avatar>
                </div>
            </Popover>
        );
    } else {
        loginStatus = (
            <Button type='primary' size='large' onClick={props.handleLogin}>
                注册/登录
            </Button>
        );
    }

    return <div>{loginStatus}</div>;
}

export default LoginAvatar;
