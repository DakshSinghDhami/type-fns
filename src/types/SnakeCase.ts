/**
 * Converts a camelCase string literal to snake_case at the type level.
 *
 * @template S - The camelCase string literal.
 * @example
 * type Result = SnakeCase<'helloWorld'>;
 * //   'hello_world'
 *
 * type Result2 = SnakeCase<'helloWorldHowAreYou'>;
 * //   'hello_world_how_are_you'
 */
export type SnakeCase<S extends string> =
  S extends `${infer T}${infer U}`
    ? U extends Uncapitalize<U>
      ? `${Lowercase<T>}${SnakeCase<U>}`
      : `${Lowercase<T>}_${SnakeCase<Uncapitalize<U>>}`
    : S;
