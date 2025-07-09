import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchUserById } from '@/services/user.service';
import IUser from '@/interfaces/user.interface';

type UserState = {
    user: Partial<IUser>;
    loading: boolean;
    error: string | null;
};

const initialState: UserState = {
    user: {},
    loading: false,
    error: null,
};

export const getUser = createAsyncThunk(
    'user/fetchAll',
    async () => {
        const result = await fetchUserById(1);
        return result || [];
    }
);

const UserAction = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getUser.pending, state => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.loading = false;
            })
            .addCase(getUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch user';
            });
    },
});

export default UserAction.reducer;
