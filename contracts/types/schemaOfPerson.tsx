import { date, mixed, number, object, SchemaOf, string } from 'yup';
import { Gender } from './Gender';
import { IPerson } from './IPerson';

export const schemaOfPerson: SchemaOf<IPerson> = object({
  nickName: string().defined(),
  email: string().required('email must be valid').email(),
  gender: mixed<Gender>()
    .required('must have gender')
    .oneOf(Object.values(Gender))
    .required(),
  givenName: string().notRequired(),
  surName: string().notRequired(),
  score: number().notRequired().min(10), // .positive(),
  birthDate: date().notRequired(),
}).defined();
