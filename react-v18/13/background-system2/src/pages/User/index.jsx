import { PageContainer, ProTable } from '@ant-design/pro-components';
import { Button, Popconfirm, Switch, message } from 'antd';

import { deleteUserApi, getUserByPageApi } from '@/services/user';
import { Access, useAccess, useNavigate } from '@umijs/max';
import { useRef, useState } from 'react';

function User(props) {
  let tableRef = useRef();
  let navigate = useNavigate();
  const access = useAccess();

  // state
  let [pageInfo, setPageInfo] = useState({
    current: 1,
    pageSize: 10,
  });

  function onChangeSwitch() {}

  function onClickEdit(rowData) {
    navigate('/user/editUser/' + rowData._id);
  }

  async function onConfirmDel(rowData) {
    let { code } = await deleteUserApi(rowData._id);
    if (code === 0) {
      tableRef.current.reload();
      message.success('删除成功！');
    }
  }

  function onChangePage(current, pageSize) {
    setPageInfo({
      current,
      pageSize,
    });
  }

  let colums = [
    {
      title: '序号',
      align: 'center',
      width: 50,
      search: false,
      render: (text, record, index) => {
        return (pageInfo.current - 1) * pageInfo.pageSize + index + 1;
      },
    },
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
      search: false,
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
      valueType: 'image',
      align: 'center',
      search: false,
    },
    {
      title: '账号状态',
      dataIndex: 'enabled',
      key: 'enabled',
      align: 'center',
      search: false,
      render: (_, row, index, action) => {
        const defaultChecked = row.enabled ? true : false;
        return [
          <Switch
            key={row._id}
            defaultChecked={defaultChecked}
            size="small"
            onChange={(value) => onChangeSwitch(row, value)}
          />,
        ];
      },
    },
    {
      title: '操作',
      width: 200,
      key: 'option',
      valueType: 'option',
      fixed: 'right',
      align: 'center',
      render: (_, row) => {
        return (
          <div>
            <Button type="link" size="small">
              详情
            </Button>
            <Button type="link" size="small" onClick={() => onClickEdit(row)}>
              编辑
            </Button>
            <Access accessible={access.SuperAdmin}>
              <Popconfirm
                title="确认要删除吗？"
                onConfirm={() => onConfirmDel(row)}
                okText="确认"
                cancelText="删除"
              >
                <Button type="link" size="small">
                  删除
                </Button>
              </Popconfirm>
            </Access>
          </div>
        );
      },
    },
  ];

  return (
    <PageContainer>
      <ProTable
        headerTitle="用户列表"
        actionRef={tableRef}
        columns={colums}
        rowKey={(row) => row._id}
        pagination={{
          current: pageInfo.current,
          pageSize: pageInfo.pageSize,
          onChange: onChangePage,
        }}
        request={async (parmas) => {
          let result = await getUserByPageApi(parmas);
          return {
            data: result.data.data,
            total: result.data.count,
            success: !result.code,
          };
        }}
      />
    </PageContainer>
  );
}

export default User;
