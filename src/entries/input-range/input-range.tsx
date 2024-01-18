import React, { FC } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import { InputController } from 'entries';
import { AppFallback } from 'shered/UI-kit';

interface IPops {
  control: any;
  onInputChange: (e: any) => void;
  errorMessage?: string;
}

const InputRange: FC<IPops> = (props) => {
  const { control, errorMessage, onInputChange } = props;
  const _preventKeyboard = (e: any) => {
    ['e', 'E', '+', '-', ',', '.'].includes(e.key) && e.preventDefault();
  };

  return (
    <>
      <p>Enter min and max star range</p>
      <Grid container alignContent="center" justifyContent="space-between">
        <Grid item>
          <InputController
            type="number"
            control={control}
            hiddenLabel
            placeholder="Min"
            size="small"
            name="min"
            onInputChange={onInputChange}
            onKeyDown={_preventKeyboard}
          />
        </Grid>

        <Grid item alignSelf="center">
          -
        </Grid>

        <Grid item>
          <InputController
            type="number"
            control={control}
            hiddenLabel
            placeholder="Max"
            size="small"
            name="max"
            onInputChange={onInputChange}
            onKeyDown={_preventKeyboard}
          />
        </Grid>
      </Grid>

      <AppFallback isVisible={!!errorMessage} fallback={null}>
        <Box mt={2}>
          <Alert icon={false} severity="error">
            {errorMessage}
          </Alert>
        </Box>
      </AppFallback>
    </>
  );
};

export { InputRange };
