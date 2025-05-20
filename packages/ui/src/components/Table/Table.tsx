import {
  Cell,
  CellProps,
  Column,
  ColumnProps,
  Table as ReactAriaTable,
  TableBody as ReactAriaTableBody,
  TableHeader as ReactAriaTableHeader,
  Row,
  RowProps,
  TableBodyProps,
  TableHeaderProps,
  TableProps,
} from "react-aria-components";
import { mergeClassNames } from "../../utils/merge-class-names";
import styles from "./table.module.css";

export function Table({ className, ...props }: TableProps) {
  return (
    <ReactAriaTable
      {...props}
      className={mergeClassNames(styles.table, className)}
    />
  );
}

export function TableBody<T extends object>({
  className,
  ...props
}: TableBodyProps<T>) {
  return (
    <ReactAriaTableBody
      {...props}
      className={mergeClassNames(styles.tableBody, className)}
    />
  );
}

export function TableCell({ className, ...props }: CellProps) {
  return (
    <Cell {...props} className={mergeClassNames(styles.tableCell, className)} />
  );
}

export function TableColumn({ className, ...props }: ColumnProps) {
  return (
    <Column
      {...props}
      className={mergeClassNames(styles.tableColumn, className)}
    />
  );
}

export function TableHeader<T extends object>({
  className,
  ...props
}: TableHeaderProps<T>) {
  return (
    <ReactAriaTableHeader
      {...props}
      className={mergeClassNames(styles.tableHeader, className)}
    />
  );
}

export function TableRow<T extends object>({
  className,
  ...props
}: RowProps<T>) {
  return (
    <Row {...props} className={mergeClassNames(styles.tableRow, className)} />
  );
}
