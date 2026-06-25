/**
 * Represents any async function type that returns a Promise.
 *
 * Useful for constraining generics or typing callback parameters
 * that expect asynchronous functions.
 *
 * @example
 * const fn: AsyncFunction = async () => {};
 * async function example(cb: AsyncFunction) {
 *   await cb();
 * }
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AsyncFunction = (...args: any[]) => Promise<any>;
