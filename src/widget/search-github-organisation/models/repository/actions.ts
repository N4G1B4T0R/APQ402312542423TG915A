import { GetRepositoryAction, GetRepositoryPayload } from './interfaces';
import { types } from './types';

export const getRepository = (payload: GetRepositoryPayload): GetRepositoryAction => ({
  type: types.GET_REPOSITORY,
  payload
});
