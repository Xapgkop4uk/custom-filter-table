import {EditCellColumnDef, Icons} from 'material-table';

type column = EditCellColumnDef & {
  lookup: Object
}

export interface FilterRowProps {
  columns: column[],
  filterCellStyle: Object
  filterRowStyle: Object
  icons: Icons
  onFilterChanged: (columnId: number, value: string) => {}
}
