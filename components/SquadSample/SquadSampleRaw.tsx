import React, { useState } from 'react';
import JSONPretty from 'react-json-pretty';
import { ValidationError } from 'yup';
import { ValidateOptions } from 'yup/lib/types';
import { WSquad } from '../../@Kit';
import { FieldType, ITextFieldData } from '../../@Kit/Fields';
import {
  guardWValidationError,
  IWithClassName,
  WValidationError,
} from '../../contracts';
import { IPerson, schemaOfPerson } from '../../contracts/types';
import { Gender } from '../../contracts/types/Gender';

const validationOptions: ValidateOptions<never> = {
  abortEarly: false,
};

export const SquadSampleRaw = ({ className }: IWithClassName) => {
  const [validation, setValidation] = useState<
    WValidationError<IPerson> | undefined
  >(undefined);

  const item: IPerson = {
    nickName: 'bnaya eshet',
    email: 'someone@gmail.com',
    // email: '',

    givenName: 'bnaya',
    surName: 'eshet',

    gender: Gender.male,
    birthDate: new Date('2021-03-20T10:30:09'),
    score: 9,
  };

  const onValidation = async (instance: IPerson) => {
    try {
      // const error: IPerson =
      await schemaOfPerson.validate(instance, validationOptions);
      const itm = new ValidationError('', instance);
      setValidation(itm);
    } catch (error) {
      if (guardWValidationError<IPerson>(error)) {
        // const assert: AssertsShape<IPersonAssert> = error;
        setValidation(error);
      }
    }
  };

  const fields: ITextFieldData<IPerson>[] = [
    {
      name: 'givenName',
      init: validation?.value?.givenName,
      value: validation?.value?.givenName,
      type: FieldType.textInput,
      onChange: (_, value) => {
        const obj: IPerson = {
          ...(validation?.value ?? item),
          givenName: value,
        };
        onValidation(obj);
      },
    },
    {
      name: 'surName',
      value: validation?.value?.surName,
      type: FieldType.textInput,
      onChange: (_, value) => {
        const obj: IPerson = {
          ...(validation?.value ?? item),
          surName: value,
        };
        onValidation(obj);
      },
    },
    {
      name: 'nickName',
      value: validation?.value?.nickName,
      type: FieldType.textInput,
      onChange: (_, value) => {
        const obj: IPerson = {
          ...(validation?.value ?? item),
          nickName: value,
        };
        onValidation(obj);
      },
    },
    {
      name: 'email',
      value: validation?.value?.email,
      type: FieldType.textInput,
      onChange: (_, value) => {
        const obj: IPerson = {
          ...(validation?.value ?? item),
          email: value,
        };
        onValidation(obj);
      },
    },
    {
      name: 'gender',
      value: validation?.value?.gender,
      type: FieldType.textInput,
      onChange: (_, value) => {
        const obj: IPerson = {
          ...(validation?.value ?? item),
          gender: value as Gender,
        };
        onValidation(obj);
      },
    },
    {
      name: 'score',
      value: validation?.value?.score?.toString(),
      type: FieldType.textInput,
      onChange: (_, value) => {
        const obj: IPerson = {
          ...(validation?.value ?? item),
          score: Number.parseInt(value, 10),
        };
        onValidation(obj);
      },
    },
  ];

  return (
    <div className={className}>
      <WSquad<IPerson> className="content" fields={fields} />
      <div className="summary">
        <JSONPretty data={validation?.errors} />
        <JSONPretty data={validation} />
      </div>
    </div>
  );
};
