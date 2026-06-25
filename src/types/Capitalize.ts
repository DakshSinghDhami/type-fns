/**
 * Capitalizes the first character of a string literal type.
 *
 * This is a re-export of the built-in `Capitalize<S>` utility type
 * provided for consistency and discoverability within the library.
 *
 * @template S - The string literal type.
 * @example
 * type Result = Capitalize<'hello'>;
 * //   'Hello'
 */
export type Capitalize<S extends string> = S extends `${infer F}${infer R}`
  ? `${Uppercase<F>}${R}`
  : S;
