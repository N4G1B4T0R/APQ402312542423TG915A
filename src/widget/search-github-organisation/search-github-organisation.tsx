import React, { ChangeEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import RefreshIcon from '@mui/icons-material/Refresh';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { InputRange, AutocompleteController, InputController } from 'entries';
import { AppTable, AppFallback } from 'shered/UI-kit';

import { autocompleteRenderOption } from './models/autocomplete/selectors';
import { repositoryOptionSelector } from './models/repository/selectors';
import { getOrganisations } from './models/autocomplete/actions';
import { getRepository } from './models/repository/actions';
import { resetRepository } from './models/repository/slice';

import { schema } from './schema';
const SearchGithubOrganisation = () => {
  const dispatch = useDispatch();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const {
    control,
    setValue,
    trigger,
    watch,
    formState: { errors }
  } = useForm<any>({
    mode: 'all',
    resolver: yupResolver(schema),
    defaultValues: {
      organization: '',
      repository: '',
      min: '',
      max: ''
    }
  });

  const [orgName, repoName, min, max] = watch(['organization', 'repository', 'min', 'max']);
  const errorMessage = (errors.min?.message as string) || (errors.max?.message as string);
  const options = useSelector(autocompleteRenderOption);
  const { rows, rowCount, isLoading } = useSelector(repositoryOptionSelector(repoName, +min, +max));

  useEffect(() => {
    if (orgName && rowCount <= page * rowsPerPage) {
      dispatch(
        getRepository({
          name: orgName,
          page: page + 1,
          perPage: rowsPerPage
        })
      );
    }
    // eslint-disable-next-line
  }, [orgName]);

  const _handleSearch = (val: string) => {
    if (val?.length > 3) {
      dispatch(getOrganisations(val));
    }
  };

  const _selectOption = (name: string) => {
    setValue('organization', name);
    dispatch(resetRepository());
  };

  const _handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const _handleRefresh = () => {
    dispatch(
      getRepository({
        name: orgName,
        page: page + 1,
        perPage: rowsPerPage
      })
    );
  };

  const _handleChangeRowsPerPage = (newRowsPerPage: number) => {
    setPage(0);
    setRowsPerPage(newRowsPerPage);
  };

  const _handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.name, e.target.value);
    setPage(0);
    trigger(e.target.name);
  };

  return (
    <>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Github REST API
          </Typography>

          <Box mb={3} mt={2}>
            <Grid container>
              <Grid item xs={!!orgName ? 11 : 12}>
                <AutocompleteController
                  disabled={!!errorMessage}
                  control={control}
                  name="organization"
                  onInputValueChange={_handleSearch}
                  renderOptions={options}
                  selectOption={_selectOption}
                />
              </Grid>
              <AppFallback isVisible={!!orgName} fallback={null}>
                <Grid item xs={1}>
                  <IconButton
                    aria-label="refresh"
                    color="primary"
                    onClick={_handleRefresh}
                    disabled={!!errorMessage}>
                    <RefreshIcon />
                  </IconButton>
                </Grid>
              </AppFallback>
            </Grid>
          </Box>

          <AppFallback isVisible={!!orgName} fallback={null}>
            <InputController
              control={control}
              name="repository"
              size="small"
              disabled={!!errorMessage}
              fullWidth
              label="Enter repository"
              variant="outlined"
              onInputChange={_handleOnChange}
            />
          </AppFallback>

          <AppFallback isVisible={!!orgName} fallback={null}>
            <InputRange
              control={control}
              onInputChange={_handleOnChange}
              errorMessage={errorMessage}
            />
          </AppFallback>
        </Paper>
      </Container>

      {orgName && (
        <Grid container justifyContent="center">
          <Grid item>
            <AppTable
              isLoading={isLoading}
              totalCount={rowCount}
              rows={rows}
              page={page}
              disabledPagination={!!errorMessage}
              rowsPerPage={rowsPerPage}
              handleChangePage={_handleChangePage}
              handleChangeRowsPerPage={_handleChangeRowsPerPage}
            />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default SearchGithubOrganisation;
