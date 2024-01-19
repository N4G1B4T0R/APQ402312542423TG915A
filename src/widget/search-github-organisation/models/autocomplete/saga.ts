import { debounce, put, call } from 'redux-saga/effects';
import { searchOrganisation } from './api';

import { SearchOrganizationsState } from './interfaces';
import { saveAutocomplete } from './slice';
import { types } from './types';
import { openUserMessage, UserMessageStatus } from 'features/user-message';

export function* saveAutocompleteData({ payload }: { payload: string }) {
  const { response, error }: { response: SearchOrganizationsState, error: string } = yield call(
    searchOrganisation,
    payload
  );
  if(error) {
    yield put(openUserMessage({ status: UserMessageStatus.error, message: error }));
  } else {
    yield put(saveAutocomplete(response));
  }
}

export function* watchAllAutocomplete() {
  yield debounce<{ type: types.GET_ORGANISATIONS; payload: string }>(
    1000,
    types.GET_ORGANISATIONS,
    saveAutocompleteData
  );
}
