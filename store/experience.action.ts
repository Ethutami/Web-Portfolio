import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchExperience } from '@/services/experience.service';
import iExperience from '@/interfaces/experience.interface';

type ExperienceState = {
    experience: iExperience[];
    loading: boolean;
    error: string | null;
};

const initialState: ExperienceState = {
    experience: [],
    loading: false,
    error: null,
};

export const getExperiences = createAsyncThunk(
    'experience/fetchAll',
    async () => {
        const result = await fetchExperience();
        return result || [];
    }
);

const experienceAction = createSlice({
    name: 'experience',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getExperiences.pending, state => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getExperiences.fulfilled, (state, action) => {
                state.experience = action.payload;
                state.loading = false;
            })
            .addCase(getExperiences.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch experiences';
            });
    },
});

export default experienceAction.reducer;
