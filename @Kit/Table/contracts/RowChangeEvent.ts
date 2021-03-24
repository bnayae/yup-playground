import { IIndexer } from '../../../contracts';

export type RowChangeEvent<T extends IIndexer<T>> = (
  value: unknown,
  dataKey: number | keyof T | undefined,
  rowIndex: number
) => void;
