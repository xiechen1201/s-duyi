import { getCaptchaApi, loginApi } from '@/services/admin';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { BarcodeOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Col, Form, Input, Row, message } from 'antd';
import ReactCanvasNest from 'react-canvas-nest';
import styles from './index.less';

function Login(props) {
  let navigate = useNavigate();

  // state
  let [loginInfo, setLoginInfo] = useState({
    loginId: '',
    loginPwd: '',
    captcha: '',
    remember: true,
  });
  const [captcha, setCaptcha] = useState(null);

  useEffect(() => {
    getCaptcha();
  }, []);

  async function getCaptcha() {
    let result = await getCaptchaApi();
    setCaptcha(result);
  }

  function updateInfo(newVal, key) {
    setLoginInfo({ ...loginInfo, [key]: newVal });
  }

  async function onFinish() {
    let { code, msg, data } = await loginApi(loginInfo);
    if (code !== 0) {
      message.warning(msg);
      getCaptcha();
    } else {
      if (!data.data) {
        getCaptcha();
        message.warning('账号或密码错误');
      } else if (!data.data.enabled) {
        getCaptcha();
        message.warning('账号被禁用');
      } else {
        localStorage.setItem('token', data.token);
        navigate('/home');
      }
    }
  }

  return (
    <>
      <ReactCanvasNest
        config={{
          pointColor: '255, 0, 0',
          count: 66,
          follow: false,
        }}
        style={{ zIndex: 1 }}
      />
      <div className={styles.container}>
        <h1>coder station 后台管理系统</h1>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={loginInfo}
          onFinish={onFinish}
        >
          {/* 登录账号 */}
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: '请输入账号',
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="请输入账号"
              value={loginInfo.loginId}
              onChange={(e) => updateInfo(e.target.value, 'loginId')}
            />
          </Form.Item>
          {/* 登录密码 */}
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: '请输入密码',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="请输入密码"
              value={loginInfo.loginPwd}
              onChange={(e) => updateInfo(e.target.value, 'loginPwd')}
            />
          </Form.Item>
          {/* 验证码 */}
          <Form.Item
            name="captcha"
            rules={[
              {
                required: true,
                message: '请输入验证码',
              },
            ]}
          >
            <Row align="middle">
              <Col span={16}>
                <Input
                  prefix={<BarcodeOutlined className="site-form-item-icon" />}
                  placeholder="请输入验证码"
                  value={loginInfo.captcha}
                  onChange={(e) => updateInfo(e.target.value, 'captcha')}
                />
              </Col>
              <Col span={6}>
                <div
                  className={styles.captchaImg}
                  onClick={getCaptcha}
                  dangerouslySetInnerHTML={{ __html: captcha }}
                ></div>
              </Col>
            </Row>
          </Form.Item>
          {/* 7天免登录 */}
          <Form.Item name="remember" className={styles.remember}>
            <Checkbox
              checked={loginInfo.remember}
              onChange={(e) => updateInfo(e.target.checked, 'remember')}
            >
              7天免登录
            </Checkbox>
          </Form.Item>
          {/* 登录按钮 */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className={styles.loginBtn}
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}

export default Login;
