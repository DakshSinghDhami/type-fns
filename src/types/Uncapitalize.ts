/**
 * Uncapitalizes the first character of a string literal type.
 *
 * This is a re-export of the built-in `Uncapitalize<S>` utility type
 * provided for consistency and discoverability within the library.
 *
 * @template S - The string literal type.
 * @example
 * type Result = Uncapitalize<'Hello'>;
 * //   'hello'
 */
export type Uncapitalize<S extends string> = S extends `${infer F}${infer R}`
  ? `${Lowercase<F>}${R}`
  : S;
