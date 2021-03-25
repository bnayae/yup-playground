import React from 'react';
import { WSquad } from '../../@Kit';
import { FieldType, ITextFieldData } from '../../@Kit/Fields';
import { IWithClassName } from '../../contracts';
import { IPerson, schemaOfPerson } from '../../contracts/types';
import { Gender } from '../../contracts/types/Gender';

export const SquadSampleRaw = ({ className }: IWithClassName) => {
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

  const fields: ITextFieldData<IPerson>[] = [
    {
      name: 'givenName',
      // init: validation?.value?.givenName,
      // value: validation?.value?.givenName,
      type: FieldType.textInput,
      // onChange: (_, value) => {
      //   const obj: IPerson = {
      //     ...(validation?.value ?? item),
      //     givenName: value,
      //   };
      //   onValidation(obj);
      // },
    },
    {
      name: 'surName',
      // value: validation?.value?.surName,
      type: FieldType.textInput,
      // onChange: (_, value) => {
      //   const obj: IPerson = {
      //     ...(validation?.value ?? item),
      //     surName: value,
      //   };
      //   onValidation(obj);
      // },
    },
    {
      name: 'nickName',
      // value: validation?.value?.nickName,
      type: FieldType.textInput,
      // onChange: (_, value) => {
      //   const obj: IPerson = {
      //     ...(validation?.value ?? item),
      //     nickName: value,
      //   };
      //   onValidation(obj);
      // },
    },
    {
      name: 'email',
      // value: validation?.value?.email,
      type: FieldType.textInput,
      // onChange: (_, value) => {
      //   const obj: IPerson = {
      //     ...(validation?.value ?? item),
      //     email: value,
      //   };
      //   onValidation(obj);
      // },
    },
    {
      name: 'gender',
      // value: validation?.value?.gender,
      type: FieldType.textInput,
      // onChange: (_, value) => {
      //   const obj: IPerson = {
      //     ...(validation?.value ?? item),
      //     gender: value as Gender,
      //   };
      //   onValidation(obj);
      // },
    },
    {
      name: 'score',
      // value: validation?.value?.score?.toString(),
      type: FieldType.textInput,
      // onChange: (_, value) => {
      //   const obj: IPerson = {
      //     ...(validation?.value ?? item),
      //     score: Number.parseInt(value, 10),
      //   };
      //   onValidation(obj);
      // },
    },
  ];

  return (
    <div className={className}>
      <WSquad<IPerson>
        className="content"
        value={item}
        fields={fields}
        schema={schemaOfPerson}
      />
      {/* <div className="summary">
        <JSONPretty data={validation?.errors} />
        <JSONPretty data={validation} />
      </div> */}
    </div>
  );
};
