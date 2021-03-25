import { IIndexer } from '../../../contracts';
import { IFieldDataBase } from '../../Fields';

export interface ISquadFieldProps<T extends IIndexer<T>> {
  field: IFieldDataBase<T>;

  /**
   * the index within the squad
   */
  index: number;

  errors?: Record<keyof T, unknown>;

  /**
   * read-only view of the data (used for review)
   */
  readonly?: boolean;
}
