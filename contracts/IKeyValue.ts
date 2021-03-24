/**
 * represent indexer accedd
 * Tip: in order of getting the indexer values use Object.values<TValue>(indexer)
 *
 * @export
 * @interface IKeyValue
 * @template TKey
 * @template TValue
 */
export interface IKeyValue<TKey = string, TValue = unknown> {
  readonly key: TKey;
  readonly value: TValue;
}

/**
 * represent indexer accedd
 * Tip: in order of getting the indexer values use Object.values<TValue>(indexer)
 *
 * @export
 * @interface IKeyValueDefault
 */
export interface IKeyValueDefault extends IKeyValue<string, string[]> {
  readonly key: string;
  readonly value: string[];
}

export const EmptyKeyValueDefault: IKeyValueDefault = { key: '', value: [] };

// function guard(arg: any): boolean {
//   return (
//     arg.key !== undefined &&
//     typeof arg.key === 'string' &&
//     arg.value !== undefined
//   );
// }

// export function guardKV(arg: any): arg is KV {
//   return guard(arg);
// }
// export function guardArrayKV(arg: any): arg is KV[] {
//   return Array.isArray(arg) && guard(arg[0]);
// }
