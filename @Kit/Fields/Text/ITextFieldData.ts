import { IFieldData } from '..';

/**
 * Declarative contract of text field.
 * Used to represent array of TextInput (for example in a form).
 */
export interface ITextFieldData<TValue extends unknown = never>
  extends IFieldData<string, TValue> {
  /**
   * rows number of the multi text box
   */
  rows?: number;
}
