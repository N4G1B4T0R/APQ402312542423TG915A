import { Selector } from 'reselect';

import { RootState } from 'shered/types';

import { UserMessageState } from './interfaces';

export const userMessageSelector: Selector<RootState, UserMessageState> = (state) =>
  state.userMessage;

const selectors = {
  userMessageSelector
};

export default selectors;
