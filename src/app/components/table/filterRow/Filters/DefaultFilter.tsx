import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Tooltip from '@material-ui/core/Tooltip';
import {FilterRowProps} from '../types';
import {ColumnDef} from '../types/columnDef.type';

const DefaultFilter = (props: FilterRowProps & ColumnDef) => {
  const {columnDef} = props;
  const FilterIcon = props.icons.Filter || (() => null);
  return (
    <TextField
      style={columnDef.type === 'numeric' ? {float: 'right'} : {}}
      type={columnDef.type === 'numeric' ? 'number' : 'search'}
      value={columnDef.tableData.filterValue || ''}
      onChange={(event) => {
        props.onFilterChanged(
            columnDef.tableData.id,
            event.target.value,
        );
      }}
      inputProps={{'aria-label': `filter data by ${columnDef.title}`}}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Tooltip title="Filter">
              <FilterIcon />
            </Tooltip>
          </InputAdornment>
        ),
      }}
    />
  );
};

export {DefaultFilter};

