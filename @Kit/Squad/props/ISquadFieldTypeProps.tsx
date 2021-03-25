import { IWithClassName } from '../../../contracts';
import { IFieldDataBase } from '../../Fields';

export interface ISquadFieldTypeProps<T extends unknown = never>
  extends IWithClassName {
  /**
   * Field general information
   */
  field: IFieldDataBase<T>;

  /**
   * the index within the squad
   */
  index: number;

  /**
   * read-only view of the data (used for review)
   */
  readonly?: boolean;

  error?: string;
}
