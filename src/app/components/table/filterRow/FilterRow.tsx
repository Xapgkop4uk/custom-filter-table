import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import {DefaultFilter, LookupFilter} from './Filters';
import {EditCellColumnDef} from 'material-table';
import {FilterRowProps} from './types';

const FilterRow = (props: FilterRowProps) => {
  console.log(props);
  const renderComponentForColumn = (columnDef: any) => columnDef.lookup ?
    <LookupFilter {...props} columnDef={columnDef} /> :
    <DefaultFilter {...props} columnDef={columnDef} />;

  const columns = props.columns
      .sort((a: EditCellColumnDef, b: EditCellColumnDef) => a.tableData.columnOrder - b.tableData.columnOrder)
      .map((columnDef: any) => (
        <TableCell
          key={columnDef.tableData.id}
          style={{
            ...props.filterCellStyle,
            ...columnDef.filterCellStyle,
          }}
        >
          {renderComponentForColumn(columnDef)}
        </TableCell>
      ));

  return (
    <TableRow style={{height: 10, ...props.filterRowStyle}}>
      {columns}
    </TableRow>
  );
};

export default FilterRow;
