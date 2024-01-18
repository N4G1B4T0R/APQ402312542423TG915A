import { SearchOrganizationsState, GitHubRepositoryState } from 'widget/search-github-organisation';
import { UserMessageState } from 'features/user-message';

export interface IGeneralAction<AT, P = undefined> {
  type: AT;
  payload?: P;
  [key: string]: unknown;
}

export interface RootState {
  autocomplete: SearchOrganizationsState;
  repository: GitHubRepositoryState;
  userMessage: UserMessageState;
}
