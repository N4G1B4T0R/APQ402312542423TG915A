import { call, put, cancelled, debounce } from 'redux-saga/effects';
import { openUserMessage, UserMessageStatus } from 'features/user-message';

import { getRepositories } from './api';
import { GetRepositoryPayload, GitHubRepositoryPayload } from './interfaces';
import { saveRepository, loadingRepository } from './slice';
import { types } from './types';

export function* saveRepositoryData({
  payload
}: {
  payload: GetRepositoryPayload;
}): Generator<any, void, any> {
  const controller = new AbortController();
  const signal = controller.signal;

  let moreResults = true;
  let count = 1;
  let fullResponse: GitHubRepositoryPayload = {
    total_count: 0,
    incomplete_results: false,
    items: []
  };

  yield put(loadingRepository(true));

  try {
    while (moreResults) {
      const { name, repo } = payload;
      const request = {
        page: count,
        perPage: 100,
        repo,
        name
      };
      const { response, error }: { response: GitHubRepositoryPayload; error?: string } = yield call(
        getRepositories,
        {
          request,
          signal
        }
      );

      if (error) {
        moreResults = false;
        yield put(openUserMessage({ status: UserMessageStatus.error, message: error }));
        return;
      }

      if (count === 1) {
        fullResponse = { ...response };
      }

      if (count > 1) {
        fullResponse = { ...fullResponse, items: fullResponse.items.concat(response.items) };
      }

      if (fullResponse.items.length === fullResponse.total_count) {
        moreResults = false;
      }

      yield put(saveRepository(fullResponse));

      count++;
    }
  } finally {
    yield put(loadingRepository(false));

    if (yield cancelled()) {
      controller.abort();
    }
  }
}

export function* watchAllRepository() {
  yield debounce<{ type: types.GET_REPOSITORY; payload: GetRepositoryPayload }>(
    300,
    types.GET_REPOSITORY,
    saveRepositoryData
  );
}
