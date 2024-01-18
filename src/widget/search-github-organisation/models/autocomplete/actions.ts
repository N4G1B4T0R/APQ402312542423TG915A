import { GetOrganisationsAction } from './interfaces';
import { types } from './types';

export const getOrganisations = (payload: string): GetOrganisationsAction => ({
  type: types.GET_ORGANISATIONS,
  payload
});
