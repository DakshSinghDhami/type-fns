/**
 * Makes specific keys `K` required within object type `T`.
 *
 * NOTE: This is NOT the same as the built-in `Required<T>` utility type,
 * which makes ALL properties required. This allows specifying which keys
 * to make required.
 *
 * @template T - The object type.
 * @template K - The keys to make required (must be keys of T).
 * @example
 * type Result = Required<{ a?: string; b: number }, 'a'>;
 * //   { a: string; b: number }
 */
export type Required<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: T[P] };
