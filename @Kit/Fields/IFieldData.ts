import { IFieldDataBase } from '.';

/**
 * Declarative contract of a field.
 * Used as base contract for ITextFieldData, etc.
 * Hold general fields which is required by a form.
 *
 *
 */
export interface IFieldData<TFieldValue, TValue extends unknown = never>
  extends IFieldDataBase<TValue> {
  // /**
  //  * custom field level validation
  //  */
  // validation?: (value: TFieldValue) => boolean;

  /**
   * initial value
   */
  init?: TFieldValue;

  /**
   * initial value (when exist will override init)
   */
  value?: TFieldValue;

  /**
   * Handle change events
   * the field name might be in a dash while the type (T) keys might be camelCase
   * (field name are subject to auto-fill).
   * by convention type field expected to be camelCase.
   * format for example: field name given-name will be map at the onChange callback to givenName.
   */
  onChange?: (camelCaseField: string, value: TFieldValue) => void;
}
