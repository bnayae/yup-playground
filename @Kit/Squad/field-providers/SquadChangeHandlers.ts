import '../../../@extensions/string-extensions';
import { guardString } from '../../../guards';
import { IFieldData, IFieldDataBase } from '../../Fields';

export const handleChanged = (field: IFieldDataBase, value: never): void => {
  const fieldName = field.name;
  if (!guardString(fieldName))
    throw Error(`Unexpected type of field.name [${typeof fieldName}]`);

  const camelName: string = fieldName.toCamel();
  const neverField = field as IFieldData<never>;
  if (neverField.onChange) {
    neverField.onChange(camelName, value as never);
  }
};

export const handleTextChanged = (
  field: IFieldData<string>,
  value: string
): void => handleChanged(field, value as never);

export const handleTextChangedEvent = (
  field: IFieldData<string>,
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
): void => handleTextChanged(field, e.target.value);
