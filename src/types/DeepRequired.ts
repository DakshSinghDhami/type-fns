/**
 * Recursively makes all properties required (removes optional modifiers).
 *
 * @template T - The type to make deeply required.
 * @example
 * type Result = DeepRequired<{ a?: { b?: number } }>;
 * //   { a: { b: number } }
 */
export type DeepRequired<T> = T extends object
  ? { [P in keyof T]-?: DeepRequired<T[P]> }
  : T;
