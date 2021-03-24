import { IWithClassName } from '../../../contracts';
import { IFieldDataBase } from '../../Fields';

export interface ISquadFieldTypeProps extends IWithClassName {
  /**
   * Field general information
   */
  field: IFieldDataBase;

  // /**
  //  * localized label
  //  */
  // label: (parameters?: string | Record<string, unknown> | undefined) => string;
  // /**
  //  * localized place-holder
  //  */
  // placeholder: (
  //   parameters?: string | Record<string, unknown> | undefined
  // ) => string;

  /**
   * the index within the squad
   */
  index: number;

  /**
   * read-only view of the data (used for review)
   */
  readonly?: boolean;
}
