import { Selector, createSelector } from 'reselect';

import { RootState } from 'shered/types';

import { GitHubRepositoryState } from './interfaces';

export const repositorySelector: Selector<RootState, GitHubRepositoryState> = (state) =>
  state.repository;

export const repositoryOptionSelector = (
  repoName: string,
  min: string,
  max: string
): Selector<RootState, any> =>
  createSelector([repositorySelector], (data) => {
    let rows = data.items.map(({ id, name, stargazers_count, open_issues_count }) => ({
      id,
      name,
      starCount: stargazers_count,
      issueCount: open_issues_count
    }));

    if (repoName) {
      rows = rows.filter((repository) =>
        repository.name.toLowerCase().startsWith(repoName.toLowerCase())
      );
    }

    if ((min || max) && (!max || max >= min)) {
      rows = rows.filter(
        (repository) =>
          (!min || repository.issueCount >= +min) && (!max || repository.issueCount <= +max)
      );
    }

    return {
      isLoading: data.isLoading,
      totalCount: data.totalCount,
      rowCount: rows.length,
      rows
    };
  });
