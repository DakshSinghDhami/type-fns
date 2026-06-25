/**
 * Picks a nested property from an object type by a path tuple.
 *
 * Returns a new object type containing only the specified path.
 *
 * @template T - The object type.
 * @template P - The path tuple to pick (e.g., `['a', 'b']`).
 * @example
 * type Obj = { a: { b: number; c: string } };
 *
 * type Result = DeepPick<Obj, ['a', 'b']>;
 * //   { a: { b: number } }
 */
export type DeepPick<T, P extends unknown[]> =
  P extends [infer K, ...infer R]
    ? K extends keyof T
      ? R extends []
        ? { [Q in K]: T[K] }
        : { [Q in K]: DeepPick<T[K], R> }
      : never
    : T;
