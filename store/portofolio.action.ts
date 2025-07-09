import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import imageData from '@/interfaces/portofolio.interface';
import { getSortedPortfolio } from '@/services/portfolio.service';

type PortfolioState = {
    portfolio: imageData[];
    loading: boolean;
    error: string | null;
};

const initialState: PortfolioState = {
    portfolio: [],
    loading: false,
    error: null,
};

export const getPortfolios = createAsyncThunk(
    'portfolio/fetchAll',
    async () => {
        const result = await getSortedPortfolio();
        return result || [];
    }
);

const portfolioAction = createSlice({
    name: 'portfolio',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getPortfolios.pending, state => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getPortfolios.fulfilled, (state, action) => {
                state.portfolio = action.payload;
                state.loading = false;
            })
            .addCase(getPortfolios.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch potfolios';
            });
    },
});

export default portfolioAction.reducer;
