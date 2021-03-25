import { ValidationError } from 'yup';
import { WValidationError } from './WValidationError';

export const guardWValidationError = <T>(
  candidate: unknown
): candidate is WValidationError<T> => {
  return candidate instanceof ValidationError;
};
