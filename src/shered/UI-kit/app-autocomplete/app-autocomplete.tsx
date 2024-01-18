import React, { FC } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Grid';

interface PlaceType {
  id: number;
  value: string;
}

interface IProps {
  name: string;
  renderOptions: { id: number; value: string }[];
  onInputValueChange: (value: string) => void;
  selectOption: (value: string) => void;
  disabled?: boolean;
}

export const AppAutocomplete: FC<IProps> = (props) => {
  const { onInputValueChange, renderOptions, selectOption, disabled } = props;
  const [value, setValue] = React.useState<PlaceType | null>(null);

  return (
    <Autocomplete
      id="google-map-demo"
      disabled={disabled}
      getOptionLabel={(option) => (typeof option === 'string' ? option : option.value)}
      filterOptions={(x) => x}
      options={renderOptions}
      autoComplete
      includeInputInList
      isOptionEqualToValue={(option, value) => option.id === value.id}
      filterSelectedOptions
      value={value}
      noOptionsText="No organisations"
      onChange={(event: any, newValue: PlaceType | null) => {
        selectOption(newValue?.value as string);
        setValue(newValue);
      }}
      onInputChange={(event, newInputValue) => {
        onInputValueChange(newInputValue);
      }}
      renderInput={(params) => (
        <TextField {...params} label="Enter organisation" fullWidth size="small" />
      )}
      renderOption={(props, option) => {
        return (
          <li {...props}>
            <Grid container alignItems="center">
              <Grid item sx={{ width: 'calc(100% - 44px)', wordWrap: 'break-word' }}>
                {option.value}
              </Grid>
            </Grid>
          </li>
        );
      }}
    />
  );
};
