import React from 'react';
import { IIndexer } from '../../../contracts';
import { guardString } from '../../../guards';
import { ISquadFieldProps } from '../props';
import { SquadPhoneField, SquadTextField } from './types';
import { guardIPhoneFieldData, guardITextFieldData } from './types/guards';

/**
 * represent squad items selection
 */
export const SquadField = <T extends IIndexer<T>>({
  field,
  index,
  error,
  readonly,
}: ISquadFieldProps<T>) => {
  if (!guardString(field.name))
    throw Error(`Unexpected type of field.name [${typeof field.name}]`);

  // const error: string | undefined =
  //   errors && Object.keys(errors)?.length
  //     ? errors[field.name as keyof T]
  //     : undefined;

  if (guardITextFieldData(field)) {
    return (
      <SquadTextField<T>
        className="squad-field"
        field={field}
        index={index}
        error={error}
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
