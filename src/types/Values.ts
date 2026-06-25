/**
 * Extracts the value types from an object type as a union.
 *
 * @template T - The object type.
 * @example
 * type Result = Values<{ a: string; b: number }>;
 * //   string | number
 */
export type Values<T> = T[keyof T];
