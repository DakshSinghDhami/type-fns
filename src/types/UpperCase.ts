/**
 * Converts a string literal type to uppercase.
 *
 * This is a re-export of the built-in `Uppercase<S>` utility type
 * provided for consistency and discoverability within the library.
 *
 * @template S - The string literal type.
 * @example
 * type Result = UpperCase<'hello'>;
 * //   'HELLO'
 */
export type UpperCase<S extends string> = Uppercase<S>;
