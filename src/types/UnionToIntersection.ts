/**
 * Converts a union type to an intersection type.
 *
 * This is useful for merging overlapping object types or resolving
 * contravariance relationships.
 *
 * @template U - The union type to convert.
 * @example
 * type Result = UnionToIntersection<{ a: string } | { b: number }>;
 * //   { a: string } & { b: number }
 */
export type UnionToIntersection<U> = (
  U extends unknown ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never;
