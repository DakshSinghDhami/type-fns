/**
 * Recursively makes all properties optional.
 *
 * @template T - The type to make deeply partial.
 * @example
 * type Result = DeepPartial<{ a: { b: number } }>;
 * //   { a?: { b?: number } }
 */
export type DeepPartial<T> = T extends object
  ? { [P in keyof T]?: DeepPartial<T[P]> }
  : T;
