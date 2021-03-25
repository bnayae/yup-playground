import React, { useState } from 'react';
// import JSONPretty from 'react-json-pretty';
// import { AssertsShape } from 'yup/lib/object';
import { WButton } from '../../@Kit/Buttons';

import {
  guardWValidationError,
  IWithClassName,
  WValidationError,
} from '../../contracts';
import { IPerson, schemaOfPerson } from '../../contracts/types';
import { Gender } from '../../contracts/types/Gender';

// const personSchema = yup.object({
//   givenName: yup
//     .string()
//     // Here we use `defined` instead of `required` to more closely align with
//     // TypeScript. Both will have the same effect on the resulting type by
//     // excluding `undefined`, but `required` will also disallow empty strings.
//     .defined(),
//   // defaults also affect the possible output type!
//   // schema with default values won't produce `undefined` values. Remember object schema
//   // have a default value built in.
//   nickName: yup.string().default('').nullable(),
//   gender: yup
//     .mixed()
//     // Note `as const`: this types the array as `["male", "female", "other"]`
//     // instead of `string[]`.
//     .oneOf(Object.values(Gender))
//     .defined(),
//   email: yup.string().nullable().notRequired().email(),
//   birthDate: yup.date().nullable().notRequired().min(new Date(1900, 0, 1)),
// });

export const SampleARaw = ({ className }: IWithClassName) => {
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

  // const v1 = schemaOfPerson.isValidSync(item);
  // const v1 = schemaOfPerson.validateSyncAt('givenName', item);
  // const v = schemaOfPerson.cast(item);
  // const v = schemaOfPerson.validate(val);
  // const v: IPersonAssert = schemaOfPerson.validateSync(item);

  const onValidation = async () => {
    try {
      // const error: IPerson =
      await schemaOfPerson.validate(item);
      // setValidation(error);
    } catch (error) {
      if (guardWValidationError<IPerson>(error)) {
        // const assert: AssertsShape<IPersonAssert> = error;
        setValidation(error);
      }
    }
  };
  return (
    <div className={className}>
      {/* <JSONPretty data={v} /> */}
      {/* <JSONPretty data={v1} /> */}
      <WButton onClick={onValidation} title="Validate" />
      {/* <JSONPretty data={validation} /> */}
      <h3>Errors:</h3>
      {validation?.message}
    </div>
  );
};
