import { store } from 'config/app-store';
import repositorySlice from './models/repository/slice';
import autocompleteSlice from './models/autocomplete/slice';
import { watchAllRepository } from './models/repository/saga';
import { watchAllAutocomplete } from './models/autocomplete/saga';

export type { SearchOrganizationsState } from './models/autocomplete/interfaces';
export type { GitHubRepositoryState } from './models/repository/interfaces';

// @ts-ignore
store.injectReducer('repository', repositorySlice);
// @ts-ignore
store.injectReducer('autocomplete', autocompleteSlice);
// @ts-ignore
store.injectSaga('repository', watchAllRepository);
// @ts-ignore
store.injectSaga('autocomplete', watchAllAutocomplete);

export { default as SearchGithubOrganisation } from './search-github-organisation';
