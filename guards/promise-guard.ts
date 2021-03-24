/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/**
 * Promise gard
 * @param candidate
 * @return true is candidate is a string false otherwise
 * @example if(guardString(prm))
 */
export const guardPromise = <T = unknown>(
  candidate: any
): candidate is Promise<T> => {
  return typeof candidate?.then === 'function';
};
