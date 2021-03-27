import React, { useEffect, useState } from 'react';
import JSONPretty from 'react-json-pretty';
import { ValidationError } from 'yup';
import { ValidateOptions } from 'yup/lib/types';
import '../../@extensions/string-extensions';
import {
  guardWValidationError,
  IIndexer,
  WValidationError,
} from '../../contracts';
import { guardString } from '../../guards';
import { IFieldData } from '../Fields';
import { SquadField } from './field-providers';
import { ISquadProps } from './props';

const validationOptions: ValidateOptions<never> = {
  abortEarly: false,
};

/**
 * represent formation of controls
 */
export const WSquadRaw = <T extends IIndexer<T>>({
  className,
  fields,
  value,
  schema,
  readonly,
}: ISquadProps<T>) => {
  const [validation, setValidation] = useState<WValidationError<T>>(
    new ValidationError('', value)
  );

  const onValidation = async (instance: T) => {
    if (!schema) {
      const itm = new ValidationError('', instance);
      setValidation(itm);
      return;
    }

    try {
      // const error: IPerson =
      await schema.validate(instance, validationOptions);
      const itm = new ValidationError('', instance);
      setValidation(itm);
    } catch (error) {
      if (guardWValidationError<T>(error)) {
        // const assert: AssertsShape<IPersonAssert> = error;
        setValidation(error);
      }
    }
  };

  useEffect(() => {
    onValidation(value);
  }, [value]);

  const onChange = (name: string, value: unknown) => {
    const cur = validation.value;
    const obj: T = {
      ...cur,
      [name]: value,
    };
    onValidation(obj);
  };

  return (
    <div className={className}>
      {fields.map((fld, i: number) => {
        const errors = validation?.inner?.reduce<
          Record<string, string> | undefined
        >( // convert errors to record structure
          (acc, cur) => (cur.path ? { ...acc, [cur.path]: cur.message } : acc),
          undefined
        );

        const { name } = fld;
        if (!guardString(name))
          throw Error(`Unexpected type of field.name [${typeof name}]`);

        const field: IFieldData<unknown, T> = {
          ...fld,
          onChange,
          value: validation.value[name],
        };

        const error = errors && errors[field.name as string];

        return (
          <SquadField<T>
            field={field}
            index={i}
            key={name as string}
            readonly={readonly}
            error={error}
          />
        );
      })}
      <JSONPretty className="squad-dev" data={validation} />
    </div>
  );
};
