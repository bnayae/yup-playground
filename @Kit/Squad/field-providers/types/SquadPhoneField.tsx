import React from 'react';
import PhoneInput from 'react-phone-input-2';
import { guardString } from '../../../../guards';
import { IFieldData } from '../../../Fields';
import { ISquadFieldTypeProps } from '../../props';
import { handleTextChanged } from '../SquadChangeHandlers';

/**
 * represent squad phone item
 */
export const SquadPhoneField = ({
  className,
  // label,
  // placeholder,
  // index,
  field,
  readonly,
}: Omit<ISquadFieldTypeProps, 'field'> & { field: IFieldData<string> }) => {
  const { fullLine, name } = field;
  if (!guardString(name))
    throw Error(`Unexpected type of field.name [${typeof name}]`);

  const fieldCls = `${className} ${fullLine ? 'full-line' : ''} ${
    readonly ? 'read-only' : ''
  }`;

  const value = (field.value ?? field.init) as string | undefined;

  return (
    <div className={fieldCls}>
      <PhoneInput
        key={name}
        // country="il"
        enableSearch
        value={value}
        onChange={(e) => handleTextChanged(field, e)}
      />
    </div>
  );
};
