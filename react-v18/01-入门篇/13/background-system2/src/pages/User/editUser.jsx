import { editUserApi, getUserByIdApi } from '@/services/user';
import { useNavigate, useParams } from '@umijs/max';
import { useEffect, useState } from 'react';

import { PageContainer } from '@ant-design/pro-components';
import { message } from 'antd';
import UserForm from './coms/UserForm';

function EditUser(props) {
  let params = useParams();
  let navigate = useNavigate();

  let [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    getDatail();
    async function getDatail() {
      let { data } = await getUserByIdApi(params.id);
      setUserInfo(data);
    }
  }, [params.id]);

  async function submitHandle() {
    await editUserApi(userInfo._id, userInfo);
    navigate('/user/userList');
    message.success('修改成功');
  }

  return (
    <PageContainer>
      <div className="container" style={{ width: '500px' }}>
        <UserForm
          type="edit"
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          submitHandle={submitHandle}
        />
      </div>
    </PageContainer>
  );
}

export default EditUser;
