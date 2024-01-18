import { all } from 'redux-saga/effects';

import { watchAllUserMessage } from 'features/user-message/model/saga';

export default function* watchAllRequests() {
  yield all([watchAllUserMessage()]);
}
