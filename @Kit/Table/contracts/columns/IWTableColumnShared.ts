import { ColumnJustifyContent, TableColumnType } from '..';
import { IWithClassName } from '../../../../contracts';

export interface IWTableColumnShared /* <T> */ extends IWithClassName {
  /**
   * use as the column key if missing will be replaces with the dataKey
   */
  key?: React.Key;

  /**
   * locale key of the title
   */
  title?: string; // React.ReactNode;

  /**
   * Column alignment
   */
  justify?: ColumnJustifyContent;

  /**
   * Control the representation of the cell's control rendering
   */
  renderType?: TableColumnType;

  // /**
  //  * specify whether the column is frozen
  //  */
  // fixed?: FixedColumnDirection | boolean;
  //   onHeaderCell?: GetComponentProps<ColumnsType<T>[number]>;
  //   ellipsis?: CellEllipsisType;
}
