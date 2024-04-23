import { useState, useRef, useEffect } from 'react';
import { Modal, Radio, Form, Input, Row, Col, Checkbox, Button, message } from 'antd';
import { useDispatch } from 'react-redux';
import { initUserInfo, changeLoginStatus } from '../../redux/userSlice';
import LoginFormStyle from './LoginForm.module.css';
import {
    getCaptchaApi,
    userIsExistApi,
    addUserApi,
    userLoginApi,
    getUserByIdApi
} from '../../api/user';

function LoginForm(props) {
    // store
    const dispatch = useDispatch();

    // state
    const [value, setValue] = useState(1);
    // 登录表单的状态数据
    const [loginInfo, setLoginInfo] = useState({
        loginId: '',
        loginPwd: '',
        captcha: '',
        remember: false
    });
    // 注册表单的状态数据
    const [registerInfo, setRegisterInfo] = useState({
        loginId: '',
        nickname: '',
        captcha: ''
    });
    const [captcha, setCaptcha] = useState(null);

    // ref
    const loginFormRef = useRef(null);
    const registerFormRef = useRef(null);

    // effect
    useEffect(() => {
        onClickcaptcha();
    }, [value]);

    // 获取验证码
    async function onClickcaptcha() {
        const result = await getCaptchaApi();
        setCaptcha(result);
    }

    // 验证登录账号是否存在
    async function checkLoginIdIsExist() {
        if (!registerInfo.loginId) {
            return false;
        }

        let result = await userIsExistApi(registerInfo.loginId);
        if (result.data) {
            return Promise.reject(new Error('该账号已存在'));
        }
    }

    async function loginHandle() {
        let result = await userLoginApi(loginInfo);

        if (result.code !== 0) {
            message.error(result.msg);
            onClickcaptcha();
        } else {
            if (!result.data.data) {
                message.error('账号或密码错误');
            } else if (!result.data.data.enabled) {
                message.error('该账号已被禁用，请联系管理员');
            } else {
                // 存储 token
                localStorage.setItem('token', result.data.token);

                // 将用户信息存储到 store 中
                let userInfo = await getUserByIdApi(result.data.data._id);
                dispatch(initUserInfo(userInfo.data));
                dispatch(changeLoginStatus(true));
                // 关闭弹窗
                props.closeModal();
            }
        }
    }

    async function registerHandle() {
        let result = await addUserApi(registerInfo);

        if (result.data) {
            message.success('用户注册成功，默认密码为：123456');
            // 将用户信息存储到 store 中
            dispatch(initUserInfo(result.data));
            dispatch(changeLoginStatus(true));
            // 关闭弹窗
            props.closeModal();
        } else {
            message.error(result.msg);
            onClickcaptcha();
        }
    }

    function updateInfo(oldInfo, newInfo, key, handleFun) {
        const obj = { ...oldInfo };
        obj[key] = newInfo;
        handleFun(obj);
    }

    function onClickOkBtn() {}

    let formContent = null;
    if (value === 1) {
        formContent = (
            <div className={LoginFormStyle.container}>
                <Form
                    name='basic1'
                    autoComplete='off'
                    ref={loginFormRef}
                    onFinish={loginHandle}>
                    {/* 账号 */}
                    <Form.Item
                        label='登录账号'
                        name='loginId'
                        rules={[
                            {
                                required: true,
                                message: '请输入账号'
                            }
                        ]}>
                        <Input
                            placeholder='请输入你的登录账号'
                            value={loginInfo.loginId}
                            onChange={(e) =>
                                updateInfo(
                                    loginInfo,
                                    e.target.value,
                                    'loginId',
                                    setLoginInfo
                                )
                            }
                        />
                    </Form.Item>
                    {/* 密码 */}
                    <Form.Item
                        label='登录密码'
                        name='loginPwd'
                        rules={[
                            {
                                required: true,
                                message: '请输入密码'
                            }
                        ]}>
                        <Input.Password
                            placeholder='请输入你的登录密码，新用户默认为123456'
                            value={loginInfo.loginPwd}
                            onChange={(e) =>
                                updateInfo(
                                    loginInfo,
                                    e.target.value,
                                    'loginPwd',
                                    setLoginInfo
                                )
                            }
                        />
                    </Form.Item>
                    {/* 验证码 */}
                    <Form.Item
                        name='logincaptcha'
                        label='验证码'
                        rules={[
                            {
                                required: true,
                                message: '请输入验证码'
                            }
                        ]}>
                        <Row align='middle'>
                            <Col span={16}>
                                <Input
                                    placeholder='请输入验证码'
                                    value={loginInfo.captcha}
                                    onChange={(e) =>
                                        updateInfo(
                                            loginInfo,
                                            e.target.value,
                                            'captcha',
                                            setLoginInfo
                                        )
                                    }
                                />
                            </Col>
                            <Col span={6}>
                                <div
                                    className={LoginFormStyle.captchaImg}
                                    onClick={onClickcaptcha}
                                    dangerouslySetInnerHTML={{ __html: captcha }}></div>
                            </Col>
                        </Row>
                    </Form.Item>
                    {/* 记住我 */}
                    <Form.Item
                        name='remember'
                        wrapperCol={{
                            offset: 5,
                            span: 16
                        }}>
                        <Checkbox
                            onChange={(e) =>
                                updateInfo(
                                    loginInfo,
                                    e.target.checked,
                                    'remember',
                                    setLoginInfo
                                )
                            }
                            checked={loginInfo.remember}>
                            记住我
                        </Checkbox>
                    </Form.Item>
                    {/* 登录/注册按钮 */}
                    <Form.Item
                        wrapperCol={{
                            offset: 5,
                            span: 16
                        }}>
                        <Button
                            type='primary'
                            htmlType='submit'
                            style={{ marginRight: 20 }}>
                            登录
                        </Button>
                        <Button type='primary' htmlType='submit'>
                            重置
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    } else {
        formContent = (
            <div className={LoginFormStyle.container}>
                <Form
                    name='basic2'
                    autoComplete='off'
                    ref={registerFormRef}
                    onFinish={registerHandle}>
                    {/* 账号 */}
                    <Form.Item
                        label='登录账号'
                        name='loginId'
                        rules={[
                            {
                                required: true,
                                message: '请输入账号，仅此项为必填项'
                            },
                            // 验证用户是否已经存在
                            { validator: checkLoginIdIsExist }
                        ]}
                        validateTrigger='onBlur'>
                        <Input
                            placeholder='请输入账号'
                            value={registerInfo.loginId}
                            onChange={(e) =>
                                updateInfo(
                                    registerInfo,
                                    e.target.value,
                                    'loginId',
                                    setRegisterInfo
                                )
                            }
                        />
                    </Form.Item>
                    {/* 昵称 */}
                    <Form.Item label='用户昵称' name='nickname'>
                        <Input
                            placeholder='请输入昵称，不填写默认为新用户xxx'
                            value={registerInfo.nickname}
                            onChange={(e) =>
                                updateInfo(
                                    registerInfo,
                                    e.target.value,
                                    'nickname',
                                    setRegisterInfo
                                )
                            }
                        />
                    </Form.Item>
                    {/* 验证码 */}
                    <Form.Item
                        name='registercaptcha'
                        label='验证码'
                        rules={[
                            {
                                required: true,
                                message: '请输入验证码'
                            }
                        ]}>
                        <Row align='middle'>
                            <Col span={16}>
                                <Input
                                    placeholder='请输入验证码'
                                    value={registerInfo.captcha}
                                    onChange={(e) =>
                                        updateInfo(
                                            registerInfo,
                                            e.target.value,
                                            'captcha',
                                            setRegisterInfo
                                        )
                                    }
                                />
                            </Col>
                            <Col span={6}>
                                <div
                                    className={LoginFormStyle.captchaImg}
                                    onClick={onClickcaptcha}
                                    dangerouslySetInnerHTML={{ __html: captcha }}></div>
                            </Col>
                        </Row>
                    </Form.Item>
                    {/* 注册/重置按钮 */}
                    <Form.Item
                        wrapperCol={{
                            offset: 5,
                            span: 16
                        }}>
                        <Button
                            type='primary'
                            htmlType='submit'
                            style={{ marginRight: 20 }}>
                            注册
                        </Button>
                        <Button type='primary' htmlType='submit'>
                            重置
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }

    return (
        <Modal
            title='注册/登录'
            destroyOnClose={true}
            open={props.isShowModal}
            onOk={onClickOkBtn}
            onCancel={props.closeModal}>
            {/* Readio */}
            <Radio.Group
                className={LoginFormStyle.radioGroup}
                buttonStyle='solid'
                value={value}
                onChange={(e) => setValue(e.target.value)}>
                <Radio.Button value={1} className={LoginFormStyle.radioButton}>
                    登录
                </Radio.Button>
                <Radio.Button value={2} className={LoginFormStyle.radioButton}>
                    注册
                </Radio.Button>
            </Radio.Group>
            {/* Form */}
            {formContent}
        </Modal>
    );
}

export default LoginForm;
