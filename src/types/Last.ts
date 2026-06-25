/**
 * Extracts the last element type from a tuple type.
 *
 * @template T - The tuple type.
 * @example
 * type Result = Last<[string, number, boolean]>;
 * //   boolean
 *
 * type Empty = Last<[]>;
 * //   never
 */
export type Last<T extends unknown[]> = T extends [...unknown[], infer L] ? L : never;
