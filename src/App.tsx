import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { UserMessage } from 'entries';
import { Dashboard } from 'pages/dashboard';
import './App.css';

function App() {
  return (
    <div>
      <UserMessage />
      <CssBaseline />
      <Dashboard />
    </div>
  );
}

export default App;
