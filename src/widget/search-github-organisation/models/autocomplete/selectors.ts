import { Selector, createSelector } from 'reselect';

import { RootState } from 'shered/types';

import { SearchOrganizationsState } from './interfaces';

export const autocompleteSelector: Selector<RootState, SearchOrganizationsState> = (state) =>
  state.autocomplete;

export const autocompleteRenderOption: Selector<RootState, { id: number; value: string }[]> =
  createSelector([autocompleteSelector], (data) => {
    return data.items
      .filter((organization) => organization.type === 'Organization')
      .map((organization) => ({
        id: organization.id,
        value: organization.login
      }));
  });
