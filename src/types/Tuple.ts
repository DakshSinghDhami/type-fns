/**
 * Creates a tuple type of length `N` where each element is of type `T`.
 *
 * Uses recursive conditional types to build the tuple.
 *
 * @template T - The element type.
 * @template N - The desired tuple length.
 * @example
 * type Result = Tuple<string, 3>;
 * //   [string, string, string]
 *
 * type Coordinates = Tuple<number, 2>;
 * //   [number, number]
 */
export type Tuple<T, N extends number, R extends T[] = []> =
  R['length'] extends N ? R : Tuple<T, N, [...R, T]>;
