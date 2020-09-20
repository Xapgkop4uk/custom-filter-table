import React from 'react';
import {MuiThemeProvider} from '@material-ui/core';
import './App.css';
import {Table} from './app/components';
import theme from './app/theme';

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <header className="App-header">
          Simple table with filtering ability
        </header>
        <div className="content">
          <Table />
        </div>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
