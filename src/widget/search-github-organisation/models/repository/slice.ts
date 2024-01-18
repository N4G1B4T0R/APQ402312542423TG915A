import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GitHubRepositoryPayload, GitHubRepositoryState } from './interfaces';

const initialState: GitHubRepositoryState = {
  isLoading: false,
  totalCount: 0,
  incompleteResults: false,
  items: []
};

const repositorySlice = createSlice({
  name: 'repository',
  initialState,
  reducers: {
    resetRepository: () => initialState,
    loadingRepository: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    saveRepository: (state, action: PayloadAction<GitHubRepositoryPayload>) => {
      state.totalCount = action.payload['total_count'];
      state.incompleteResults = action.payload['incomplete_results'];
      state.items = action.payload.items;
    }
  }
});

export const { saveRepository, resetRepository, loadingRepository } = repositorySlice.actions;
export default repositorySlice.reducer;
