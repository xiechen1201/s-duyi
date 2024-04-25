import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Input, Select, Space } from 'antd';
import { initUserInfo, changeLoginStatus } from '../../redux/userSlice';
import LoginAvatar from '../LoginAvatar/LoginAvatar';
import LoginForm from '../LoginForm/LoginForm';
import { getInfoApi, getUserByIdApi } from '../../api/user';

const { Search } = Input;

function NavHeader(props) {
    const dispatch = useDispatch();

    const [isShowModal, setIsShowModal] = useState(false);

    // 初始化登录
    useEffect(() => {
        userUserInfo();
    }, []);

    async function userUserInfo() {
        try {
            let result = await getInfoApi();
            let data = await getUserByIdApi(result?._id);

            dispatch(initUserInfo(data || {}));
            dispatch(changeLoginStatus(true));
        } catch (error) {}
    }

    function closeModal() {
        setIsShowModal(false);
    }

    function handleLogin() {
        setIsShowModal(true);
    }

    return (
        <div className='headerContainer'>
            {/* 头部 Logo */}
            <div className='logoContainer'>
                <div className='logo'></div>
            </div>
            {/* 头部导航 */}
            <nav className='navContainer'>
                <NavLink to='/' className='navgation'>
                    问 答
                </NavLink>
                <NavLink to='/book' className='navgation'>
                    书 籍
                </NavLink>
                <NavLink to='/interviews' className='navgation'>
                    面试题
                </NavLink>
                <a
                    href='http://www.baidu.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='navgation'>
                    视频教程
                </a>
            </nav>
            {/* 搜索框 */}
            <div className='searchContainer'>
                <Space.Compact>
                    <Select
                        size='large'
                        defaultValue='issue'
                        options={[
                            {
                                value: 'issue',
                                label: '问答'
                            },
                            {
                                value: 'book',
                                label: '书籍'
                            }
                        ]}
                    />
                    <Search
                        placeholder='请输入要搜索的内容'
                        allowClear
                        enterButton='搜索'
                        size='large'
                    />
                </Space.Compact>
            </div>
            {/* 登录按钮 */}
            <div className='loginBtnContainer'>
                <LoginAvatar handleLogin={handleLogin} />
            </div>
            {/* 登录弹窗 */}
            <LoginForm isShowModal={isShowModal} closeModal={closeModal} />
        </div>
    );
}

export default NavHeader;
