import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLogin: false,
        userInfo: {}
    },
    reducers: {
        changeLoginStatus: (state, { payload }) => {
            state.isLogin = payload;
        },
        initUserInfo: (state, { payload }) => {
            state.userInfo = payload;
        }
    }
});

export const { initUserInfo, changeLoginStatus } = userSlice.actions;
export default userSlice.reducer;
