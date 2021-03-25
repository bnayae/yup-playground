import { Asserts } from 'yup';
import { schemaOfPerson } from './schemaOfPerson';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IPersonAssert extends Asserts<typeof schemaOfPerson> {}
