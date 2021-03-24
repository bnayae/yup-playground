import { GetComponentProps } from 'rc-table/lib/interface';
import { IWTableColumnShared } from '.';
import { IIndexer } from '../../../../contracts';

export interface IWTableColumn<T extends IIndexer<T>>
  extends IWTableColumnShared {
  /**
   * the object's key which present the column data
   */
  dataKey?: keyof T | number; // | readonly (string | number)[];

  /**
   * Customize the cell representation
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render?: (value: any, record: T, index: number) => React.ReactNode; // | RenderedCell<T>;

  shouldCellUpdate?: (record: T, prevRecord: T) => boolean;
  width?: number | string;
  onCell?: GetComponentProps<T>;

  //   rowSpan?: number;
  //   colSpan?: number;
  //   dataIndex?: DataIndex;
}
