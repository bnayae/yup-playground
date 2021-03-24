import React from 'react';
import '../../../@extensions/string-extensions';
import { guardString } from '../../guards';
import { IFieldDataBase } from '../Fields';
import { SquadField } from './field-providers';
import { ISquadProps } from './props';

/**
 * represent formation of controls
 */
export const WSquadRaw = ({ className, fields, readonly }: ISquadProps) => {
  return (
    <div className={className}>
      {fields.map((field: IFieldDataBase, i: number) => {
        const { name } = field;
        if (!guardString(name))
          throw Error(`Unexpected type of field.name [${typeof name}]`);

        return (
          <SquadField field={field} index={i} key={name} readonly={readonly} />
        );
      })}
    </div>
  );
};
