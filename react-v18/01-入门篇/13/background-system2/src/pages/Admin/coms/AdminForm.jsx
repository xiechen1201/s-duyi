import { adminIsExistApi } from '@/services/admin';
import { useRef } from 'react';

import { PlusOutlined } from '@ant-design/icons';
import { Avatar, Button, Form, Input, Radio, Upload } from 'antd';

function AdminForm(props) {
  let formRef = useRef(null);

  /* if (formRef.current) {
    formRef.current.setFieldsValue(props.adminInfo);
  } */

  function updateInfo(newVal, key) {
    let newAdminInfo = { ...props.adminInfo };
    newAdminInfo[key] = newVal;
    props.setAdminInfo(newAdminInfo);
  }

  async function checkLoginId() {
    if (props.adminInfo.loginId && props.type === 'add') {
      const { data } = await adminIsExistApi(props.adminInfo.loginId);
      if (data) {
        return Promise.reject('账号已存在');
      } else {
        return Promise.resolve();
      }
    }
  }

  return (
    <Form
      name="basic"
      initialValues={props.adminInfo}
      ref={formRef}
      autoComplete="off"
      onFinish={props.submitHandler}
    >
      {/* 账号 */}
      <Form.Item
        label="管理员账号"
        name="loginId"
        rules={[
          { required: true, message: '请输入管理员账号' },
          { validateTrigger: 'onBlur', validator: checkLoginId },
        ]}
      >
        <Input
          disabled={props.type === 'edit'}
          value={props.adminInfo.loginId}
          onChange={(e) => updateInfo(e.target.value, 'loginId')}
        />
      </Form.Item>
      {/* 密码 */}
      <Form.Item
        label="管理员密码"
        name="loginPwd"
        rules={[
          props.type === 'edit'
            ? { required: true, message: '密码不能为空' }
            : null,
        ]}
      >
        <Input.Password
          placeholder={props.type === 'add' ? '密码可选，默认是123123' : ''}
          value={props.adminInfo.loginPwd}
          onChange={(e) => updateInfo(e.target.value, 'loginPwd')}
        />
      </Form.Item>
      {/* 昵称 */}
      <Form.Item
        label="管理员昵称"
        name="nickname"
        rules={[
          props.type === 'edit'
            ? { required: true, message: '昵称不能为空' }
            : null,
        ]}
      >
        <Input
          placeholder={props.type === 'add' ? '昵称可选，默认是新增管理员' : ''}
          value={props.adminInfo.nickname}
          onChange={(e) => updateInfo(e.target.value, 'nickname')}
        />
      </Form.Item>
      {/* 当前头像 */}
      {props.type === 'add' ? null : (
        <Form.Item label="当前头像" name="avatar">
          <Avatar size={100} src={props.adminInfo.avatar} />
        </Form.Item>
      )}
      {/* 上传 */}
      <Form.Item label="上传头像" name="avatar">
        <Upload
          listType="picture-card"
          maxCount={1}
          action="/api/upload"
          onChange={(e) => {
            if (e.file.status === 'done') {
              updateInfo(e.file.response.data, 'avatar');
            }
          }}
        >
          <div>
            <PlusOutlined />
            <div style={{ marginTop: '8px' }}>头像可选</div>
          </div>
        </Upload>
      </Form.Item>
      {/* 权限 */}
      <Form.Item
        label="权限选择"
        name="permission"
        rules={[{ required: true, message: '权限不能为空' }]}
      >
        <Radio.Group
          value={props.adminInfo.permission}
          onChange={(e) => updateInfo(e.target.value, 'permission')}
        >
          <Radio value={1}>超级管理员</Radio>
          <Radio value={2}>普通管理员</Radio>
        </Radio.Group>
      </Form.Item>
      {/* 按钮 */}
      <Form.Item wrapperCol={{ offset: 5, span: 16 }}>
        <Button type="primary" htmlType="submit">
          {props.type === 'add' ? '确认新增' : '修改'}
        </Button>
        <Button className="resetBtn" type="link" htmlType="submit">
          重置
        </Button>
      </Form.Item>
    </Form>
  );
}

export default AdminForm;
