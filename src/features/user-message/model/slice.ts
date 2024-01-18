import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserMessageProps, UserMessageState, UserMessageStatus } from './interfaces';

const initialState: UserMessageState = {
  data: {
    status: UserMessageStatus.success,
    message: ''
  },
  isOpenUserMessage: false
};

const userMessageSlice = createSlice({
  name: 'userMessage',
  initialState,
  reducers: {
    saveUserMessage: (state, action: PayloadAction<UserMessageProps>) => {
      state.isOpenUserMessage = true;
      state.data = action.payload;
    },
    closeUserMessage: () => initialState
  }
});

export const { saveUserMessage, closeUserMessage } = userMessageSlice.actions;
export default userMessageSlice.reducer;
