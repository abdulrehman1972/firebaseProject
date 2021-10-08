import {configureStore} from '@reduxjs/toolkit';
import WalletReducer from './Reducer/WalletReducer/WalletReducer';
export const store = configureStore({
  reducer: {
    message: WalletReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
