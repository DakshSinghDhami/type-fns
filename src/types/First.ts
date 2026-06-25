/**
 * Extracts the first element type from a tuple type.
 *
 * @template T - The tuple type.
 * @example
 * type Result = First<[string, number, boolean]>;
 * //   string
 *
 * type Empty = First<[]>;
 * //   never
 */
export type First<T extends unknown[]> = T extends [infer F, ...unknown[]] ? F : never;
