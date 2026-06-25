/**
 * Gets the value type at a given path in a nested object type.
 *
 * The path is represented as a tuple of keys.
 *
 * @template T - The object type to query.
 * @template P - The path tuple (e.g., `['a', 'b']`).
 * @example
 * type Obj = { a: { b: number; c: string } };
 *
 * type Result1 = PathValue<Obj, ['a', 'b']>;
 * //   number
 *
 * type Result2 = PathValue<Obj, ['a', 'c']>;
 * //   string
 *
 * type Result3 = PathValue<Obj, ['a']>;
 * //   { b: number; c: string }
 */
export type PathValue<T, P extends unknown[]> =
  P extends [infer K, ...infer R]
    ? K extends keyof T
      ? R extends []
        ? T[K]
        : PathValue<T[K], R>
      : never
    : T;
