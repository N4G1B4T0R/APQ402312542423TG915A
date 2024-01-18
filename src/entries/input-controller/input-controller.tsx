import React, { FC } from 'react';
import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { IProps } from './interface';

export const InputController: FC<IProps> = ({
  name,
  control,
  defaultText = '',
  rules = {},
  onInputChange,
  type = 'text',
  ...rest
}) => (
  <Controller
    name={name}
    control={control}
    rules={rules}
    render={({ field: { onChange, onBlur, value } }) => (
      <TextField
        onBlur={onBlur}
        name={name}
        onChange={onInputChange || onChange}
        value={type === 'text' ? value || defaultText : value}
        type={type}
        {...rest}
      />
    )}
  />
);
