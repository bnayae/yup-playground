/* eslint-disable @typescript-eslint/no-explicit-any */
import { ValidationError } from 'yup';

export type WValidationError<T extends unknown> = Omit<
  ValidationError,
  'value'
> & {
  value: T;
};
