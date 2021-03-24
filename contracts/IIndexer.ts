/**
 * represent indexer access
 * Tip: in order of getting the indexer values use Object.values<TValue>(indexer)
 *
 * @export
 * @template TKey
 * @template TValue
 */
export type IIndexer<TKey, TValue = unknown> = Partial<
  Record<keyof TKey, TValue>
>;
