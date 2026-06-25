/**
 * Picks keys from `T` whose values extend type `V`.
 *
 * @template T - The object type.
 * @template V - The value type to filter by.
 * @example
 * type Result = PickByValue<{ a: string; b: number; c: string }, string>;
 * //   { a: string; c: string }
 */
export type PickByValue<T, V> = {
  [P in keyof T as T[P] extends V ? P : never]: T[P];
};
