import { RowID, RowElement } from './interface'

//type declaration for each of the crud function in the crud.js
declare module './crud' {
  export function insertRow(row: RowElement): RowID;
  export function deleteRow(rowId: RowID): void;
  export function updateRow(rowId: RowID, row: RowElement): RowID;
}
