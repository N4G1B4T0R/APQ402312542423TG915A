import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchOrganizationsState } from './interfaces';

const initialState: SearchOrganizationsState = {
  total_count: 0,
  incomplete_results: false,
  items: []
};

const autocompleteSlice = createSlice({
  name: 'autocomplete',
  initialState,
  reducers: {
    saveAutocomplete: (state, action: PayloadAction<SearchOrganizationsState>) => action.payload,
    resetAutocomplete: () => initialState
  }
});

export const { saveAutocomplete, resetAutocomplete } = autocompleteSlice.actions;
export default autocompleteSlice.reducer;
