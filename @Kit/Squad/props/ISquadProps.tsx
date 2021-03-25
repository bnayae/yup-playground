import { SchemaOf } from 'yup';
import { IWithClassName } from '../../../contracts';
import { IFieldDataBase } from '../../Fields';

/**
 * represent formation of controls
 */
export interface ISquadProps<T extends unknown> extends IWithClassName {
  /**
   * field definitions
   */
  fields: IFieldDataBase<T>[];

  errors?: Record<keyof T, unknown>;

  /**
   * read-only view of the data (used for review)
   */
  readonly?: boolean;

  schema?: SchemaOf<T>;
}
