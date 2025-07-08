'use client';

import { Provider } from 'react-redux';
import { store } from '../store'; // pastikan path ini benar relatif dari /app

export function Providers({ children }: { children: React.ReactNode }) {
    return <Provider store={store}>{children}</Provider>;
}
