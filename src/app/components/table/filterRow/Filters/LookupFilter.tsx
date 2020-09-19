import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import TextField from '@material-ui/core/TextField';
import {FilterRowProps} from '../types';
import {ColumnDef} from '../types/columnDef.type';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const LookupFilter = (props: FilterRowProps & ColumnDef) => {
  const {columnDef} = props;
  const options = Object.values(columnDef.lookup);
  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={options}
      disableCloseOnSelect
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
        props.onFilterChanged(
            columnDef.tableData.id,
            value,
        );
      }}
      renderInput={(params) => (
        <TextField {...params} variant="standard" />
      )}/>
  );
};

export {LookupFilter};
