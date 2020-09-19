import {EditCellColumnDef} from 'material-table';

export interface ColumnDef {
  columnDef: EditCellColumnDef & {
    lookup: Object
    type: string
  }
}
