/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable func-names */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-extend-native */
/* eslint-disable @typescript-eslint/naming-convention */

import { guardArray } from '../guards';

type RecordKey = string | number | symbol;

// credits: https://www.itsrainingmani.dev/blog/string-prototype-extension/
export {};
declare global {
  interface Array<T> {
    /**
     * convert array to record
     * @param keySelector key of element type of the array which its value will use as a key
     * @param valueSelector optional value selector
     */
    toRecord<K extends keyof T, V = T>(
      keySelector: K,
      valueSelector?: (item: T, index: number) => V
    ): Record<RecordKey, V>;

    /**
     * convert array to record
     * @param keySelector key selector
     * @param valueSelector optional value selector
     */
    toRecordMap<K extends RecordKey, V = T>(
      keySelector: (item: T, index: number) => K,
      valueSelector?: (item: T, index: number) => V
    ): Record<K, V>;

    /**
     * convert array of (string, number, symbol) to record (the key will be the values of the array)
     * @param valueSelector optional value selector
     */
    toRecordSelf<V = T>(
      valueSelector: (item: T, index: number) => V
    ): Record<RecordKey, V>;

    /**
     * combine 2 array without duplication
     * @example [1,2,3].union(2,3,4,5) = [1,2,3,4,5]
     */
    union(array: T[] | T): T[];

    /**
     * The intersection will give us the elements that both arrays share in
     * commonThe intersection will give us the elements that both arrays share in common.
     * @example [1,2,3].intersect(2,3,4,5) = [2,3]
     */
    intersect(array: T[] | T): T[];

    /**
     * returns elements of the array which not exists in the argument array.
     * @example [1,2,3,4].except(3,4,5) = [1,2]
     */
    except(array: T[] | T): T[];
  }
}

if (!Array.prototype.toRecord) {
  Array.prototype.toRecord = function <
    T extends { [K in keyof T]: RecordKey }, // added constraint
    K extends keyof T,
    V = T
  >(
    keySelector: K,
    valueSelector?: (item: T, index: number) => V
  ): Record<T[K], V> {
    const empty = {} as Record<T[K], V>;
    return this.reduce<Record<T[K], V>>((acc, item, index) => {
      const k: T[K] = item[keySelector];
      const value = valueSelector ? valueSelector(item, index) : item;
      return { ...acc, [k]: value } as Record<T[K], V>;
    }, empty);
  };
}

if (!Array.prototype.toRecordMap) {
  Array.prototype.toRecordMap = function <
    T extends { [K in keyof T]: RecordKey }, // added constraint
    K extends RecordKey,
    V = T
  >(
    keySelector: (item: T, index: number) => K,
    valueSelector?: (item: T, index: number) => V
  ): Record<RecordKey, V> {
    const empty = {} as Record<K, V>;
    return this.reduce<Record<K, V>>((acc, item, index) => {
      const k: K = keySelector(item, index);
      const value = valueSelector ? valueSelector(item, index) : item;
      return { ...acc, [k]: value } as Record<K, V>;
    }, empty);
  };
}

if (!Array.prototype.toRecordSelf) {
  Array.prototype.toRecordSelf = function <
    T extends RecordKey, // added constraint
    V = T
  >(valueSelector: (item: T, index: number) => V): Record<T, V> {
    const empty = {} as Record<T, V>;
    return this.reduce<Record<T, V>>((acc, item, index) => {
      const value = valueSelector(item, index);
      return { ...acc, [item]: value } as Record<T, V>;
    }, empty);
  };
}

if (!Array.prototype.union) {
  Array.prototype.union = function <T>(value: T[] | T): T[] {
    const array = guardArray(value) ? value : [value];
    const res = [...new Set<T>([...this, ...array])];
    return res;
  };
}

if (!Array.prototype.intersect) {
  Array.prototype.intersect = function <T>(value: T[] | T): T[] {
    const array = guardArray(value) ? value : [value];
    const res = this.filter((m) => array.includes(m));
    return res;
  };
}

if (!Array.prototype.except) {
  Array.prototype.except = function <T>(value: T[] | T): T[] {
    const array = guardArray(value) ? value : [value];
    const res = this.filter((m) => !array.includes(m));
    return res;
  };
}
