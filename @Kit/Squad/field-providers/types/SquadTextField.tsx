import React from 'react';
import '../../../../@extensions/string-extensions';
import { guardString } from '../../../../guards';
import { ITextFieldData } from '../../../Fields';
import { WTextInput } from '../../../TextInput';
import { ISquadFieldTypeProps } from '../../props';
import { handleTextChangedEvent } from '../SquadChangeHandlers';

/**
 * represent squad text item
 */
export const SquadTextField = ({
  className,
  field,
  index,
  readonly,
}: Omit<ISquadFieldTypeProps, 'field'> & { field: ITextFieldData }) => {
  const { fullLine, name } = field;
  if (!guardString(name))
    throw Error(`Unexpected type of field.name [${typeof name}]`);

  const rows = field.rows ?? 1;
  const useFullLine = fullLine || (fullLine == null && rows > 1);
  const fieldCls = `${className} ${useFullLine ? 'full-line' : ''} ${
    readonly ? 'read-only' : ''
  }`;

  const key = name.toDash(); // fit standard fields

  return (
    <WTextInput
      key={key}
      className={fieldCls}
      required={field.isRequired}
      autoFocus={index === 0}
      rows={field.rows}
      value={field.value ?? field.init}
      name={key}
      onChange={(e) => handleTextChangedEvent(field, e)}
    />
  );
};
