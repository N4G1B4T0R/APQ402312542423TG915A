import React, { FC } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Column } from './interfaces';
import { AppSkeleton } from '../app-skeleton';
import Box from '@mui/material/Box';

const columns: readonly Column[] = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'issueCount', label: 'Number of issues', minWidth: 100 },
  { id: 'starCount', label: 'Number of stars', minWidth: 100 }
];

interface IProps {
  rows: any;
  page: number;
  isLoading: boolean;
  rowsPerPage: number;
  totalCount: number;
  handleChangePage: (val: number) => void;
  handleChangeRowsPerPage: (val: number) => void;
  disabledPagination?: boolean;
}

export const AppTable: FC<IProps> = (props) => {
  const {
    rows,
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    totalCount,
    disabledPagination,
    isLoading
  } = props;
  const _handlePage = (event: unknown, newPage: number) => {
    handleChangePage(newPage);
  };

  const _changeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleChangeRowsPerPage(+event.target.value);
  };

  const _createArrayOfObjects = (number: number) => {
    let arrayOfObjects = [];

    for (let i = 1; i <= number; i++) {
      arrayOfObjects.push(
        <TableRow hover tabIndex={-1} key={i}>
          <TableCell>
            <AppSkeleton width={270} />
          </TableCell>
          <TableCell>
            <AppSkeleton width={90} />
          </TableCell>
          <TableCell>
            <AppSkeleton width={90} />
          </TableCell>
        </TableRow>
      );
    }

    return arrayOfObjects;
  };

  const _renderRows = () => {
    const start = page * rowsPerPage;
    const end = page * rowsPerPage + rowsPerPage;
    const rowLen = rows?.length;

    if (!rowLen && !isLoading) {
      return (
        <TableRow>
          <TableCell colSpan={3}>
            <Box display="flex" justifyContent="center" width="100%">
              No Data!
            </Box>
          </TableCell>
        </TableRow>
      );
    }

    if (!rowLen && isLoading) {
      return _createArrayOfObjects(10);
    }

    return rows.slice(start, end).map((row: any) => {
      return (
        <TableRow hover tabIndex={-1} key={row.name}>
          {columns.map((column) => {
            const value = row[column.id];
            return (
              <TableCell key={column.id} align={column.align}>
                {column.format && typeof value === 'number' ? column.format(value) : value}
              </TableCell>
            );
          })}
        </TableRow>
      );
    });
  };

  return (
    <Paper sx={{ width: '900px', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 800 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>{_renderRows()}</TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 20, 40]}
        component="div"
        disabled={disabledPagination}
        count={totalCount}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={_handlePage}
        onRowsPerPageChange={_changeRowsPerPage}
      />
    </Paper>
  );
};
