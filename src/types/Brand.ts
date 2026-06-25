/**
 * Creates a branded (nominal) type from a base type and a brand identifier.
 *
 * Branded types provide nominal typing in TypeScript's structural type system,
 * preventing accidental mixing of values that share the same underlying type.
 *
 * @template T - The base type (e.g., `string`, `number`).
 * @template B - The brand identifier string.
 * @example
 * type Email = Brand<string, 'Email'>;
 * type UserId = Brand<string, 'UserId'>;
 *
 * function sendEmail(to: Email, body: string) {}
 *
 * const email = 'user@example.com' as Email;
 * const id = 'user-123' as UserId;
 *
 * sendEmail(email, 'Hello'); // OK
 * // sendEmail(id, 'Hello');    // ❌ TypeScript error
 */
export type Brand<T, B extends string> = T & { __brand: B };
