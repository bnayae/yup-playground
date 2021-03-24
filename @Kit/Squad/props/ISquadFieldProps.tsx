import { IFieldDataBase } from '../../Fields';

export interface ISquadFieldProps {
  field: IFieldDataBase;

  /**
   * the index within the squad
   */
  index: number;

  /**
   * read-only view of the data (used for review)
   */
  readonly?: boolean;
}
