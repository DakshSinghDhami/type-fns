/**
 * Removes `readonly` modifiers from all properties of a type.
 *
 * This is the inverse of the built-in `Readonly<T>` utility type.
 *
 * @template T - The type to make mutable.
 * @example
 * type Result = Mutable<{ readonly a: string; readonly b: number }>;
 * //   { a: string; b: number }
 */
export type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};
