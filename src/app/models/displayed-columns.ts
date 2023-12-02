export interface DisplayedColumns {
  display: ColumnProps[];
  columns: string[];
}

export interface ColumnProps {
  name: string;
  header: string;
  type: string;
}
