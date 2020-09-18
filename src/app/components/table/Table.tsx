import React, {useEffect, useState} from 'react';
import MaterialTable, {Column} from 'material-table';

import './Table.css';

import {IUser} from './types';
import FilterRow from './filterRow/FilterRow';
import tableIcons from './icons';
import {createMuiTheme, MuiThemeProvider, colors} from '@material-ui/core';

const Table: React.FC = () => {
  const theme = createMuiTheme({
    palette: {
      type: 'dark',
      secondary: {
        main: colors.common.white,
        dark: colors.common.white,
      },
    },
    components: {
      MuiSelect: {
        styleOverrides: {
          iconFilled: {
            color: '#000',
          },
        },
      },
    },
  });

  const [users, setUsers] = useState<IUser[]>([]);
  const [columns, setColumns] = useState<Column<IUser>[]>([]);

  useEffect(() => {
    const usersFromFile: IUser[] = require('../../static/users.json');
    const setOfVariants = new Set([...usersFromFile.map(({plan}) => plan )]);
    const lookup = [...setOfVariants].reduce((acc, variant) => ({
      ...acc,
      [variant]: variant,
    }), {});

    const columns: Column<IUser>[] = [
      {title: 'Email', field: 'email'},
      {title: 'User Plan', field: 'plan', type: 'string', lookup},
    ];

    setUsers(usersFromFile);
    setColumns(columns);
  }, []);

  return (
    <div className="table-wrapper">
      <MuiThemeProvider theme={theme}>
        <MaterialTable
          columns={columns}
          data={users}
          options={{
            filtering: true,
            search: false,

          }}
          components={{
            FilterRow: FilterRow,
          }}
          icons={tableIcons}
          title="Users"
        />
      </MuiThemeProvider>
    </div>
  );
};

export {Table};
