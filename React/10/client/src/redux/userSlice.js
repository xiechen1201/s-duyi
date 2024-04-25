import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { editUserApi } from '../api/user';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLogin: false,
        userInfo: {}
    },
    reducers: {
        // 初始化用户信息
        initUserInfo: (state, { payload }) => {
            state.userInfo = payload;
        },
        // 更新用户登录状态
        changeLoginStatus: (state, { payload }) => {
            state.isLogin = payload;
        },
        // 清除用户信息
        clearUserInfo: (state) => {
            state.userInfo = {};
        },
        // 更新用户信息
        updateUserInfo: (state, { payload }) => {
            for (const key in payload) {
                state.userInfo[key] = payload[key];
            }
        }
    }
});

export const updateUserInfoAsync = createAsyncThunk(
    'user/updateUserInfoAsync',
    async (payload, actions) => {
        try {
            await editUserApi(payload.userId, payload.newInfo);
            actions.dispatch(updateUserInfo(payload.newInfo));
        } catch (error) {}
    }
);

export const { initUserInfo, changeLoginStatus, clearUserInfo, updateUserInfo } =
    userSlice.actions;
export default userSlice.reducer;
