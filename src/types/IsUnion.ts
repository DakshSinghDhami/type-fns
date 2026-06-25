/**
 * Checks whether type `T` is a union type.
 *
 * Returns `true` if `T` is a union of two or more types, otherwise `false`.
 *
 * @template T - The type to check.
 * @example
 * type Result1 = IsUnion<string | number>;
 * //   true
 *
 * type Result2 = IsUnion<string>;
 * //   false
 *
 * type Result3 = IsUnion<never>;
 * //   false
 */
export type IsUnion<T, U extends T = T> =
  (T extends unknown ? (U extends T ? false : true) : never) extends false ? false : true;
