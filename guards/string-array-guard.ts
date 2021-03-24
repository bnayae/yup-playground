/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/**
 * String[] gard
 * @param candidate
 * @return true is candidate is a string[] false otherwise
 * @example if(guardStringArray(prm))
 */
export const guardStringArray = (candidate: any): candidate is string[] => {
  if (!Array.isArray(candidate)) return false;
  if (candidate.length === 0) return true;
  const item = candidate[0];
  return typeof item === 'string' || item instanceof String;
};
