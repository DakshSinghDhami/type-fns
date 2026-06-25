/**
 * Extracts the head (all elements except the last) from a tuple type.
 *
 * @template T - The tuple type.
 * @example
 * type Result = Head<[string, number, boolean]>;
 * //   [string, number]
 *
 * type Empty = Head<[string]>;
 * //   []
 */
export type Head<T extends unknown[]> = T extends [...infer R, unknown] ? R : [];
