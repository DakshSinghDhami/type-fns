/**
 * Omits keys from `T` whose values extend type `V`.
 *
 * @template T - The object type.
 * @template V - The value type to filter out.
 * @example
 * type Result = OmitByValue<{ a: string; b: number; c: string }, string>;
 * //   { b: number }
 */
export type OmitByValue<T, V> = {
  [P in keyof T as T[P] extends V ? never : P]: T[P];
};
