/**
 * Represents a constructor/class type.
 *
 * @template T - The instance type (defaults to `object`).
 * @template A - The constructor argument tuple (defaults to `unknown[]`).
 * @example
 * class Person { constructor(public name: string) {} }
 * type PersonConstructor = Constructor<Person, [string]>;
 * const Ctor: PersonConstructor = Person;
 * const p = new Ctor("Alice"); // Person
 */
export type Constructor<T = object, A extends unknown[] = unknown[]> = new (...args: A) => T;
