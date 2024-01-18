import React, { FC, ReactNode } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface IProps {
  children: ReactNode;
}

export const AppLayout: FC<IProps> = (props) => (
  <>
    <AppBar
      position="absolute"
      color="default"
      elevation={0}
      sx={{
        position: 'relative',
        borderBottom: (t) => `1px solid ${t.palette.divider}`
      }}>
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          Test Project
        </Typography>
      </Toolbar>
    </AppBar>
    <Box
      component="main"
      sx={{
        backgroundColor: 'rgb(245, 245, 245)',
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto'
      }}>
      {props.children}
    </Box>
  </>
);
