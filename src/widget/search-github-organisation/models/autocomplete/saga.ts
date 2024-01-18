import { debounce, put, call } from 'redux-saga/effects';
import { searchOrganisation } from './api';

import { SearchOrganizationsState } from './interfaces';
import { saveAutocomplete } from './slice';
import { types } from './types';

export function* saveAutocompleteData({ payload }: { payload: string }) {
  const { response }: { response: SearchOrganizationsState } = yield call(
    searchOrganisation,
    payload
  );
  yield put(saveAutocomplete(response));
}

export function* watchAllAutocomplete() {
  yield debounce<{ type: types.GET_ORGANISATIONS; payload: string }>(
    1000,
    types.GET_ORGANISATIONS,
    saveAutocompleteData
  );
}
