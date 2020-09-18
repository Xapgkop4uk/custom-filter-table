import * as React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import InputAdornment from '@material-ui/core/InputAdornment';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

import Tooltip from '@material-ui/core/Tooltip';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

class FilterRow extends React.Component<any> {
  LookupFilter = ({columnDef}: any) => {
    const options = Object.values(columnDef.lookup).map((value) => value);
    return (
      <Autocomplete
        multiple
        id="checkboxes-tags-demo"
        options={options}
        disableCloseOnSelect
        getOptionLabel={(option: any) => option}
        renderOption={(option, {selected}) => (
          <React.Fragment>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{marginRight: 8}}
              checked={selected}
            />
            {option}
          </React.Fragment>
        )}
        onChange={(_, value: any ) => {
          this.props.onFilterChanged(
              columnDef.tableData.id,
              value,
          );
        }}
        renderInput={(params) => (
          <TextField {...params} variant="standard" />
        )}/>
    );
  }

  renderDefaultFilter = (columnDef: any) => {
    const FilterIcon = this.props.icons.Filter;
    return (
      <TextField
        style={columnDef.type === 'numeric' ? {float: 'right'} : {}}
        type={columnDef.type === 'numeric' ? 'number' : 'search'}
        value={columnDef.tableData.filterValue || ''}
        onChange={(event) => {
          this.props.onFilterChanged(
              columnDef.tableData.id,
              event.target.value,
          );
        }}
        inputProps={{'aria-label': `filter data by ${columnDef.title}`}}
        InputProps={
          this.props.hideFilterIcons || columnDef.hideFilterIcon ?
            undefined :
            {
              startAdornment: (
                <InputAdornment position="start">
                  <Tooltip title="Filter">
                    <FilterIcon />
                  </Tooltip>
                </InputAdornment>
              ),
            }
        }
      />
    );
  };

  getComponentForColumn(columnDef: any) {
    if (columnDef.field || columnDef.customFilterAndSearch) {
      if (columnDef.lookup) {
        return <this.LookupFilter columnDef={columnDef} />;
      } else {
        return this.renderDefaultFilter(columnDef);
      }
    }
  }

  render() {
    const columns = this.props.columns
        .filter(
            (columnDef: any) =>
              !columnDef.hidden && !(columnDef.tableData.groupOrder > -1),
        )
        .sort((a: any, b: any) => a.tableData.columnOrder - b.tableData.columnOrder)
        .map((columnDef: any) => (
          <TableCell
            key={columnDef.tableData.id}
            style={{
              ...this.props.filterCellStyle,
              ...columnDef.filterCellStyle,
            }}
          >
            {this.getComponentForColumn(columnDef)}
          </TableCell>
        ));

    return (
      <TableRow style={{height: 10, ...this.props.filterRowStyle}}>
        {columns}
      </TableRow>
    );
  }
}

export default FilterRow;
