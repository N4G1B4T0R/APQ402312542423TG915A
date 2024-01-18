export interface Column {
  id: 'name' | 'issueCount' | 'starCount';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}
