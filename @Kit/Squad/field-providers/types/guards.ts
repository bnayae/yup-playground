import { FieldType, IFieldDataBase, ITextFieldData } from '../../../Fields';

export const guardITextFieldData = (
  candidate: IFieldDataBase
): candidate is ITextFieldData => candidate.type === FieldType.textInput;

export const guardIPhoneFieldData = (
  candidate: IFieldDataBase
): candidate is ITextFieldData => candidate.type === FieldType.phoneInput;
