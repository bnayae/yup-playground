import { SchemaOf } from 'yup';
import { IWTableColumn, RowChangeEvent } from '.';
import { TableLayoutStyle } from '..';
import { IIndexer, IWithClassName } from '../../../contracts';

export interface IWTableProps<T extends IIndexer<T>> extends IWithClassName {
  schema?: SchemaOf<T>;

  /**
   * table column definition
   */
  columns?: IWTableColumn<T>[]; // (ColumnGroupType<T> | ColumnType<T>)[];

  /**
   * class prefix
   */
  prefixCls?: string;

  /**
   * rows class name strategy
   */
  rowClassName?:
    | string
    | ((record: T, rowIndex: number, indent: number) => string);

  /**
   * row key selection strategy.
   * default implementation is using the index.
   *
   * IMPORTANT: don't use editable fields (will cause refresh)
   * */
  rowKey?: keyof T | ((record: T, index?: number) => React.Key);

  onRowAdd?: () => void;

  onRowChange?: RowChangeEvent<T>;

  /**
   * table's data
   */
  data: readonly T[];

  /**
   * sticky header
   */
  sticky?: boolean;

  /**
   * show header
   */
  showHeader?: boolean;

  /**
   * layout strategy
   */
  tableLayout?: TableLayoutStyle;
}
