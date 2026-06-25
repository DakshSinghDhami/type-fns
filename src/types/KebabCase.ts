/**
 * Converts a camelCase string literal to kebab-case at the type level.
 *
 * @template S - The camelCase string literal.
 * @example
 * type Result = KebabCase<'helloWorld'>;
 * //   'hello-world'
 *
 * type Result2 = KebabCase<'helloWorldHowAreYou'>;
 * //   'hello-world-how-are-you'
 */
export type KebabCase<S extends string> =
  S extends `${infer T}${infer U}`
    ? U extends Uncapitalize<U>
      ? `${Lowercase<T>}${KebabCase<U>}`
      : `${Lowercase<T>}-${KebabCase<Uncapitalize<U>>}`
    : S;
