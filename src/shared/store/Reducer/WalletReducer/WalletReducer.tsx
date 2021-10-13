import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {WalletState} from '../../../Modals/types';
const initialState: WalletState = {
  email: '',
  password: '',
  username: '',
  isDarkMode: false,
  filePath: '',
  userChatId: '',
};
const DataSaver = createSlice({
  name: 'message',
  initialState,
  reducers: {
    resetState(state) {
      return initialState;
    },
    setEm(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setPass(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },
    setUser(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
    setDarkMode(state, action: PayloadAction<boolean>) {
      state.isDarkMode = action.payload;
    },
    setFilePth(state, action: PayloadAction<string>) {
      state.filePath = action.payload;
    },
    setUserId(state, action: PayloadAction<string>) {
      state.userChatId = action.payload;
    },
  },
});
export const {
  resetState,
  setEm,
  setUser,
  setPass,
  setDarkMode,
  setFilePth,
  setUserId,
} = DataSaver.actions;
export default DataSaver.reducer;
