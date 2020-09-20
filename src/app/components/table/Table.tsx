import React from 'react';
import MaterialTable from 'material-table';

import './Table.css';

import FilterRow from './filterRow/FilterRow';
import tableIcons from './icons';
import {useUsersTable} from './hooks';

const Table: React.FC = () => {
  const [users, columns] = useUsersTable();
  return (
    <div className="table-wrapper">
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
    </div>
  );
};

export {Table};
