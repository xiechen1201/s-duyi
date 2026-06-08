import { addUserApi } from '@/services/user';
import { useNavigate } from '@umijs/max';
import { useState } from 'react';

import { PageContainer } from '@ant-design/pro-components';
import { message } from 'antd';
import UserForm from './coms/UserForm';

function AddUser(props) {
  let navigate = useNavigate();

  // state
  let [newUserInfo, setNewUserInfo] = useState({
    loginId: '',
    loginPwd: '',
    avatar: '',
    nickname: '',
    mail: '',
    qq: '',
    wechat: '',
    intro: '',
  });

  async function submitHandle() {
    await addUserApi(newUserInfo);
    navigate('/user/userList');
    message.success('添加成功');
  }

  return (
    <PageContainer>
      <div className="container" style={{ width: '500px' }}>
        <UserForm
          type="add"
          userInfo={newUserInfo}
          setUserInfo={setNewUserInfo}
          submitHandle={submitHandle}
        />
      </div>
    </PageContainer>
  );
}

export default AddUser;
