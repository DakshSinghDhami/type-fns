import type { IsAny } from './IsAny';

/**
 * Conditional type: returns `A` if `T` is `any`, otherwise returns `B`.
 *
 * @template T - The type to check.
 * @template A - The type to return if `T` is `any`.
 * @template B - The type to return if `T` is not `any`.
 * @example
 * type Result1 = IfAny<any, 'yes', 'no'>;
 * //   'yes'
 *
 * type Result2 = IfAny<string, 'yes', 'no'>;
 * //   'no'
 *
 * type Result3 = IfAny<unknown, 'yes', 'no'>;
 * //   'no'
 */
export type IfAny<T, A, B> = IsAny<T> extends true ? A : B;
