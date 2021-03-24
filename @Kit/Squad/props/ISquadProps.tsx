import { IWithClassName } from '../../../contracts';
import { IFieldDataBase } from '../../Fields';

/**
 * represent formation of controls
 */
export interface ISquadProps extends IWithClassName {
  /**
   * field definitions
   */
  fields: IFieldDataBase[];

  /**
   * read-only view of the data (used for review)
   */
  readonly?: boolean;
}
