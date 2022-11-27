export interface RowModal {
  value: string;
  readonly: boolean;
  subRows: RowModal[];
  id: string;
  deleted: boolean;
}
