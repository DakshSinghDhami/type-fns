/**
 * Excludes `null` and `undefined` from type `T`.
 *
 * This is equivalent to the built-in `NonNullable<T>` utility type.
 *
 * @template T - The type to remove null and undefined from.
 * @example
 * type Result = NonNullable<string | null | undefined>;
 * //   string
 */
export type NonNullable<T> = T extends null | undefined ? never : T;
