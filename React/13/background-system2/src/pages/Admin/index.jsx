import { PageContainer, ProTable } from '@ant-design/pro-components';
import { useDispatch, useSelector } from '@umijs/max';
import { useEffect, useState } from 'react';

import { Button, Modal, Popconfirm, Switch, Tag, message } from 'antd';
import AdminForm from './coms/AdminForm';

function Admin() {
  // hook
  const dispatch = useDispatch();
  const stateAdmin = useSelector((state) => state.admin);

  // state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editAdminInfo, setEditAdminInfo] = useState({});

  useEffect(() => {
    if (stateAdmin.adminList.length === 0) {
      dispatch({ type: 'admin/_initAdminList' });
    }
  }, [stateAdmin.adminList]);

  // handler
  function onChangeSwitch(state, rowData) {
    dispatch({
      type: 'admin/_updateAdmin',
      payload: {
        adminInfo: rowData,
        newAdminInfo: {
          enabled: state,
        },
      },
    });
    state
      ? message.success('管理员已激活！')
      : message.success('管理员已禁用！');
  }

  function onClickEdit(rowData) {
    setEditAdminInfo(rowData);
    setIsModalOpen(true);
  }

  function onSubmitForm() {
    dispatch({
      type: 'admin/_updateAdmin',
      payload: {
        adminInfo: editAdminInfo,
        newAdminInfo: editAdminInfo,
      },
    });
    message.success('管理员信息已更新！');
  }

  function onConfirmDel(rowData) {
    dispatch({ type: 'admin/_deleteAdmin', payload: rowData._id });
    message.success('删除成功！');
  }

  // 列数据
  let columns = [
    {
      title: '登录账号',
      dataIndex: 'loginId',
      key: 'loginId',
      align: 'center',
    },
    {
      title: '登录密码',
      dataIndex: 'loginPwd',
      key: 'loginPwd',
      align: 'center',
    },
    {
      title: '昵称',
      dataIndex: 'nickname',
      key: 'nickname',
      align: 'center',
    },
    {
      title: '头像',
      dataIndex: 'avatar',
      key: 'avatar',
      align: 'center',
      valueType: 'avatar',
    },
    {
      title: '权限',
      dataIndex: 'permission',
      key: 'permission',
      align: 'center',
      render: (_, row) => {
        let tag =
          row.permission === 1 ? (
            <Tag color="orange" key={row._id}>
              超级管理员
            </Tag>
          ) : (
            <Tag color="blue" key={row._id}>
              普通管理员
            </Tag>
          );
        return tag;
      },
    },
    {
      title: '账号状态',
      dataIndex: 'enabled',
      key: 'enabled',
      align: 'center',
      render: (_, row) => {
        return (
          <Switch
            key={row._id}
            size="small"
            defaultChecked={row.enabled ? true : false}
            onChange={(state) => onChangeSwitch(state, row)}
          />
        );
      },
    },
    {
      title: '操作',
      width: 150,
      key: 'option',
      align: 'center',
      render: (_, row) => {
        return (
          <div key={row._id}>
            <Button type="link" size="small" onClick={() => onClickEdit(row)}>
              编辑
            </Button>
            <Popconfirm
              title="确认删除吗？"
              description=""
              onConfirm={() => onConfirmDel(row)}
              okText="确定"
              cancelText="取消"
            >
              <Button type="link" size="small">
                删除
              </Button>
            </Popconfirm>
          </div>
        );
      },
    },
  ];

  return (
    <PageContainer>
      <ProTable
        headerTitle="管理员列表"
        dataSource={stateAdmin.adminList}
        rowKey={(row) => row._id}
        columns={columns}
        search={false}
        pagination={{
          pageSize: 5,
        }}
      ></ProTable>
      {/* Modal 弹窗 */}
      <Modal
        title="修改管理员信息"
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
      >
        <AdminForm
          type="edit"
          adminInfo={editAdminInfo}
          setAdminInfo={setEditAdminInfo}
          submitHandler={onSubmitForm}
        />
      </Modal>
    </PageContainer>
  );
}

export default Admin;
