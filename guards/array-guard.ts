/**
 * Guard for record
 * @param candidate the evaluating type
 */
export const guardArray = <T extends unknown = unknown>(
  candidate: unknown
): candidate is T[] => {
  return typeof candidate === 'object' && Array.isArray(candidate);
};
