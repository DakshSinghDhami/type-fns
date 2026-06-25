/**
 * Checks whether type `T` is `any`.
 *
 * Returns `true` if `T` is `any`, otherwise `false`.
 *
 * @template T - The type to check.
 * @example
 * type Result1 = IsAny<any>;
 * //   true
 *
 * type Result2 = IsAny<string>;
 * //   false
 *
 * type Result3 = IsAny<unknown>;
 * //   false
 */
export type IsAny<T> = 0 extends (1 & T) ? true : false;
