// store/index.ts
import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user.action'
import experienceReducer from './experience.action';
import portfolioReducer from './portofolio.action'

export const store = configureStore({
    reducer: {
        experience: experienceReducer,
        user: userReducer,
        portfolio: portfolioReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
