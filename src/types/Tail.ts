/**
 * Extracts the tail (all elements except the first) from a tuple type.
 *
 * @template T - The tuple type.
 * @example
 * type Result = Tail<[string, number, boolean]>;
 * //   [number, boolean]
 *
 * type Empty = Tail<[string]>;
 * //   []
 */
export type Tail<T extends unknown[]> = T extends [unknown, ...infer R] ? R : [];
