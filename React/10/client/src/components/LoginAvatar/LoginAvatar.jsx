import React from 'react';
import { useSelector } from 'react-redux';
import { Button, List, Popover, Avatar, Image } from 'antd';
import LoginAvatarStyle from './LoginAvatar.module.css';

function LoginAvatar(props) {
    const { isLogin, userInfo } = useSelector((state) => state.user);

    let loginStatus = null;
    if (isLogin) {
        const PopoverContent = (
            <List
                dataSource={['个人中心', '退出登录']}
                size='large'
                renderItem={(item) => (
                    <List.Item style={{ cursor: 'pointer' }}>{item}</List.Item>
                )}
            />
        );

        loginStatus = (
            <Popover content={PopoverContent} trigger='hover'>
                <div className={LoginAvatarStyle.avatarContainer}>
                    <Avatar
                        src={<Image src={userInfo?.avatar} />}
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
