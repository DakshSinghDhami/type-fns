/**
 * Makes type `T` nullable by adding `null` and `undefined` to the union.
 *
 * @template T - The type to make nullable.
 * @example
 * type Result = Nullable<string>;
 * //   string | null | undefined
 */
export type Nullable<T> = T | null | undefined;
