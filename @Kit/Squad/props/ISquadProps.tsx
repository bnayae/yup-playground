import { SchemaOf } from 'yup';
import { IIndexer, IWithClassName } from '../../../contracts';
import { IFieldDataBase } from '../../Fields';

/**
 * represent formation of controls
 */
export interface ISquadProps<T extends IIndexer<T>> extends IWithClassName {
  /**
   * field definitions
   */
  fields: Omit<Omit<Omit<IFieldDataBase<T>, 'init'>, 'value'>, 'onChange'>[];

  errors?: Record<keyof T, unknown>;

  /**
   * read-only view of the data (used for review)
   */
  readonly?: boolean;

  schema?: SchemaOf<T>;

  value: T;
}
