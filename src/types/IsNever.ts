/**
 * Checks whether type `T` is `never`.
 *
 * Returns `true` if `T` is `never`, otherwise `false`.
 *
 * @template T - The type to check.
 * @example
 * type Result1 = IsNever<never>;
 * //   true
 *
 * type Result2 = IsNever<string>;
 * //   false
 *
 * type Result3 = IsNever<undefined>;
 * //   false
 */
export type IsNever<T> = [T] extends [never] ? true : false;
