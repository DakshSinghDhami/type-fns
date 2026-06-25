/**
 * Gets all possible value types reachable via any path in a nested object.
 *
 * This recursively extracts all leaf and intermediate value types as a union.
 *
 * @template T - The object type to extract values from.
 * @example
 * type Obj = { a: { b: number; c: string } };
 *
 * type Result = PathValues<Obj>;
 * //   number | string | { b: number; c: string }
 */
export type PathValues<T> = T extends object
  ? Values<{ [K in keyof T]: T[K] | PathValues<T[K]> }>
  : T;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Values<T> = T[keyof T];
