/**
 * Converts a snake_case string literal to camelCase at the type level.
 *
 * @template S - The snake_case string literal.
 * @example
 * type Result = CamelCase<'hello_world'>;
 * //   'helloWorld'
 *
 * type Result2 = CamelCase<'hello_world_how_are_you'>;
 * //   'helloWorldHowAreYou'
 */
export type CamelCase<S extends string> =
  S extends `${infer T}_${infer U}`
    ? `${Lowercase<T>}${Capitalize<CamelCase<U>>}`
    : Lowercase<S>;
