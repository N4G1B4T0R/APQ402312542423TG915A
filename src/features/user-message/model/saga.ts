import { put, takeLatest } from 'redux-saga/effects';

import { UserMessageProps } from './interfaces';
import { saveUserMessage } from './slice';
import { types } from './types';

export function* saveUserMessageData({ payload }: { payload: UserMessageProps }) {
  yield put(saveUserMessage(payload));
}

export function* watchAllUserMessage() {
  yield takeLatest<{ payload: UserMessageProps; type: types.OPEN_USER_MESSAGE }>(
    types.OPEN_USER_MESSAGE,
    saveUserMessageData
  );
}
