import React from 'react';
import { guardString } from '../../../guards';
import { ISquadFieldProps } from '../props';
import { SquadPhoneField, SquadTextField } from './types';
import { guardIPhoneFieldData, guardITextFieldData } from './types/guards';

/**
 * represent squad items selection
 */
export const SquadField = ({ field, index, readonly }: ISquadFieldProps) => {
  if (!guardString(field.name))
    throw Error(`Unexpected type of field.name [${typeof field.name}]`);

  if (guardITextFieldData(field)) {
    return (
      <SquadTextField
        className="squad-field"
        field={field}
        index={index}
        readonly={readonly}
      />
    );
  }

  if (guardIPhoneFieldData(field)) {
    return (
      <SquadPhoneField
        className="squad-field"
        field={field}
        index={index}
        readonly={readonly}
      />
    );
  }

  throw new Error(`[${field.type}] not implemented`);
};
