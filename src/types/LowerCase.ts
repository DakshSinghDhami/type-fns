/**
 * Converts a string literal type to lowercase.
 *
 * This is a re-export of the built-in `Lowercase<S>` utility type
 * provided for consistency and discoverability within the library.
 *
 * @template S - The string literal type.
 * @example
 * type Result = LowerCase<'HELLO'>;
 * //   'hello'
 */
export type LowerCase<S extends string> = Lowercase<S>;
