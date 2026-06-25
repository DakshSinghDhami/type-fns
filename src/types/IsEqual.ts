/**
 * Checks whether two types `T` and `U` are exactly equal.
 *
 * Returns `true` if `T` and `U` are the same type, otherwise `false`.
 *
 * @template T - The first type to compare.
 * @template U - The second type to compare.
 * @example
 * type Result1 = IsEqual<string, string>;
 * //   true
 *
 * type Result2 = IsEqual<string, number>;
 * //   false
 *
 * type Result3 = IsEqual<any, string>;
 * //   false
 */
export type IsEqual<T, U> = [T] extends [U] ? ([U] extends [T] ? true : false) : false;
