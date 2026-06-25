/**
 * Extracts the resolved type of an async function's return value.
 *
 * @template T - The async function type.
 * @example
 * type Result = AsyncReturnType<() => Promise<string>>;
 * //   string
 */
export type AsyncReturnType<T extends (...args: unknown[]) => unknown> =
  T extends (...args: unknown[]) => Promise<infer R> ? R : never;
