import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTypeApi } from '../api/type';

export const getTypeList = createAsyncThunk('type/getTypeList', async (_, actions) => {
    const response = await getTypeApi();
    return response;
});

const typeSlice = createSlice({
    name: 'type',
    initialState: {
        typeList: [],
        issueTypeId: 'all',
        bookTypeId: 'all'
    },
    reducers: {
        updateIssueTypeId(state, { payload }) {
            state.issueTypeId = payload;
        }
    },
    // 专门处理异步
    extraReducers: (builder) => {
        builder.addCase(getTypeList.fulfilled, (state, { payload }) => {
            state.typeList = payload;
        });
    }
});

export const { updateIssueTypeId } = typeSlice.actions;
export default typeSlice.reducer;
