/**
 * Extracts entry types from an object (similar to `Object.entries()`).
 *
 * Each entry is a tuple of `[key, value]` for each property in `T`.
 *
 * @template T - The object type.
 * @example
 * type Result = Entries<{ a: string; b: number }>;
 * //   ['a', string] | ['b', number]
 */
export type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T];
