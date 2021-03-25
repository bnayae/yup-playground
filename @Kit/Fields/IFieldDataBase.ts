/**
 * Declarative contract of a field.
 * Used as base contract for ITextFieldData, etc.
 * Hold general fields which is required by a form.
 */

import { FieldType } from '.';
import { IIndexer } from '../../contracts';

export interface IFieldDataBase<T extends IIndexer<T> = never> {
  /**
   * Field name (will be the name of the field in the json, on submit)
   */
  name: keyof T;
  /**
   * The ui representation type of the field
   */
  type: FieldType;
  /**
   * Indicate whether this field is required
   */
  isRequired?: boolean;

  /**
   * indicate whether to span over the entire line.
   * default for most controls is 2 control ia a line,
   * multi text box default is to span to full line
   */
  fullLine?: boolean;
}
