/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

/**
 * String number
 * @param candidate
 * @return true is candidate is a number false otherwise
 * @example if(guardNumber(prm))
 */
export const guardNumber = (candidate: any): candidate is number => {
  return typeof candidate === 'number';
};
