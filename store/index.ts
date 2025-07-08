// store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import experienceReducer from './experience.action';
import { useDispatch } from 'react-redux';

export const store = configureStore({
    reducer: {
        experience: experienceReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// 👇 ini custom hook yang penting
export const useAppDispatch: () => AppDispatch = useDispatch;
