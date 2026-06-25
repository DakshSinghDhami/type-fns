/**
 * Recursively adds `readonly` modifiers to all properties of a type.
 *
 * @template T - The type to make deeply immutable.
 * @example
 * type Result = Immutable<{ a: { b: string } }>;
 * //   { readonly a: { readonly b: string } }
 */
export type Immutable<T> = T extends object
  ? { readonly [P in keyof T]: Immutable<T[P]> }
  : T;
