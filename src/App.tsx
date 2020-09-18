import React from 'react';
import './App.css';
import {Table} from './app/components/table/Table';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Simple table with filtering ability
      </header>
      <div className="content">
        <Table />
      </div>
    </div>
  );
}

export default App;
