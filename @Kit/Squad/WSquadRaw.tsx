import React from 'react';
import '../../@extensions/string-extensions';
import { guardString } from '../../guards';
import { IFieldDataBase } from '../Fields';
import { SquadField } from './field-providers';
import { ISquadProps } from './props';

/**
 * represent formation of controls
 */
export const WSquadRaw = <T extends unknown>({
  className,
  fields,
  readonly,
}: ISquadProps<T>) => {
  return (
    <div className={className}>
      {fields.map((field: IFieldDataBase<T>, i: number) => {
        const { name } = field;
        if (!guardString(name))
          throw Error(`Unexpected type of field.name [${typeof name}]`);

        return (
          <SquadField<T>
            field={field}
            index={i}
            key={name}
            readonly={readonly}
          />
        );
      })}
    </div>
  );
};
