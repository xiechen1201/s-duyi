import {
  addAdminApi,
  deleteAdminApi,
  editAdminApi,
  getAdminApi,
} from '../services/admin';

export default {
  namespace: 'admin',
  state: {
    adminList: [], // 存储所有的管理员信息
    adminInfo: null, // 存储当前登录管理员信息
  },
  // 同步更新
  reducers: {
    initAdminList(state, { payload }) {
      const newState = { ...state };
      newState.adminList = payload;
      return newState;
    },
    delAdminList(state, { payload }) {
      const newState = { ...state };
      newState.adminList = newState.adminList.filter(
        (item) => item._id !== payload,
      );
      return newState;
    },
    updateAdminList(state, { payload }) {
      const newState = { ...state };

      newState.adminList.map((el) => {
        if (el._id === payload.adminInfo._id) {
          for (const key in payload.newAdminInfo) {
            if (payload.newAdminInfo.hasOwnProperty(key)) {
              el[key] = payload.newAdminInfo[key];
            }
          }
        }
        return el;
      });

      return newState;
    },
    addAdminList(state, { payload }) {
      const newState = { ...state };
      const arr = [...newState.adminList]

      arr.push(payload);
      newState.adminList = arr;
      return newState;
    },
  },
  // 处理异步副作用
  effects: {
    // 初始化管理员列表
    *_initAdminList(_, { put, call }) {
      // 和服务器进行通信请求，拿到所有的数据
      const { data } = yield call(getAdminApi);
      // 拿到 reducer 更新本地仓库
      yield put({
        type: 'initAdminList',
        payload: data,
      });
    },
    // 删除管理员仓库
    *_deleteAdmin({ payload }, { put, call }) {
      yield call(deleteAdminApi, payload);
      yield put({
        type: 'delAdminList',
        payload: payload,
      });
    },
    // 更新管理员仓库
    *_updateAdmin({ payload }, { put, call }) {
      yield call(editAdminApi, payload.adminInfo._id, payload.newAdminInfo);
      yield put({
        type: 'updateAdminList',
        payload,
      });
    },
    // 新增管理员
    *_addAdmin({ payload }, { put, call }) {
      let { data } = yield call(addAdminApi, payload);
      yield put({
        type: 'addAdminList',
        payload: data,
      });
    },
  },
};
