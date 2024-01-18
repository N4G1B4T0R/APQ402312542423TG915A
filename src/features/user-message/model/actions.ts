import { OpenUserMessageAction, UserMessageProps } from './interfaces';
import { types } from './types';

export const openUserMessage = (payload: UserMessageProps): OpenUserMessageAction => ({
  type: types.OPEN_USER_MESSAGE,
  payload
});
