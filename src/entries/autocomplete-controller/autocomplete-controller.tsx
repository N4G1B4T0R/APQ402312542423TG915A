import React, { FC } from 'react';
import { Controller } from 'react-hook-form';
import { AppAutocomplete } from '../../shered/UI-kit';
import { IProps } from './interface';
export const AutocompleteController: FC<IProps> = ({
  name,
  control,
  onInputValueChange,
  renderOptions,
  selectOption,
  defaultText = '',
  rules = {},
  ...rest
}) => (
  <Controller
    name={name}
    control={control}
    rules={rules}
    render={() => (
      <AppAutocomplete
        name={name}
        onInputValueChange={onInputValueChange}
        renderOptions={renderOptions}
        selectOption={selectOption}
        {...rest}
      />
    )}
  />
);
