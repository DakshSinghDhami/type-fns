/**
 * Omits a nested property from an object type by a path tuple.
 *
 * Returns a new object type without the specified path.
 *
 * @template T - The object type.
 * @template P - The path tuple to omit (e.g., `['a', 'b']`).
 * @example
 * type Obj = { a: { b: number; c: string } };
 *
 * type Result = DeepOmit<Obj, ['a', 'b']>;
 * //   { a: { c: string } }
 */
export type DeepOmit<T, P extends unknown[]> =
  P extends [infer K, ...infer R]
    ? K extends keyof T
      ? R extends []
        ? Omit<T, K>
        : { [Q in keyof T]: Q extends K ? DeepOmit<T[Q], R> : T[Q] }
      : T
    : T;
