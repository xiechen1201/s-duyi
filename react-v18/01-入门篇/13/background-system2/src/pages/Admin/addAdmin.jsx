import { useDispatch, useSelector } from '@umijs/max';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { PageContainer } from '@ant-design/pro-components';
import { message } from 'antd';
import AdminForm from './coms/AdminForm';

function AddAdmin(props) {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let [newAdminInfo, setNewAdminInfo] = useState({
    loginId: '',
    loginPwd: '',
    nickname: '',
    avatar: '',
    permission: 2, // 2普通管理员
  });

  let { adminList } = useSelector((state) => state.admin);

  useEffect(() => {
    if (adminList.length === 0) {
      dispatch({
        type: 'admin/_getAdminList',
      });
    }
  }, [adminList]);

  function onSubmitForm() {
    dispatch({
      type: 'admin/_addAdmin',
      payload: newAdminInfo,
    });
    navigate('/admin/adminList');
    message.success('添加成功！');
  }

  return (
    <PageContainer>
      <div className="container" style={{ width: '500px' }}>
        <AdminForm
          type="add"
          adminInfo={newAdminInfo}
          setAdminInfo={setNewAdminInfo}
          submitHandler={onSubmitForm}
        />
      </div>
    </PageContainer>
  );
}

export default AddAdmin;
