import { types } from './types';
import { IGeneralAction } from 'shered/types';

export enum UserMessageStatus {
  error = 'error',
  success = 'success'
}

export interface UserMessageProps {
  status: UserMessageStatus;
  message?: string;
}

export interface UserMessageState {
  data: UserMessageProps;
  isOpenUserMessage: boolean;
}

export type OpenUserMessageAction = IGeneralAction<types.OPEN_USER_MESSAGE, UserMessageProps>;
