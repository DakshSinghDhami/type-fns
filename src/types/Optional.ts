/**
 * Makes specific keys `K` optional within object type `T`.
 *
 * @template T - The object type.
 * @template K - The keys to make optional (must be keys of T).
 * @example
 * type Result = Optional<{ a: string; b: number }, 'a'>;
 * //   { a?: string; b: number }
 */
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
