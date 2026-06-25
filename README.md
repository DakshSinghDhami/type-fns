# type-fns

[![npm version](https://img.shields.io/npm/v/type-fns.svg)](https://www.npmjs.com/package/type-fns)
[![GitHub](https://img.shields.io/github/license/DakshSinghDhami/type-fns)](https://github.com/DakshSinghDhami/type-fns)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3%2B-blue)](https://www.typescriptlang.org/)

A comprehensive collection of production-ready TypeScript utility types. Enhance your TypeScript projects with powerful type transformations, conditional types, string literal manipulations, and deep object traversal utilities.

---

## Installation

```bash
npm install type-fns
```

Or using yarn:

```bash
yarn add type-fns
```

## Quick Start

```typescript
import type {
  DeepPartial,
  DeepRequired,
  Brand,
  SnakeCase,
  CamelCase,
  UnionToIntersection,
  Immutable,
  Tuple,
  PickByValue,
  OmitByValue,
  PathValue,
  DeepPick,
  DeepOmit,
  IsNever,
  IsUnion,
  IsAny,
  IfAny,
} from 'type-fns';

// -- Object transformations --
type PartialConfig = DeepPartial<{ db: { host: string; port: number } }>;
//   { db?: { host?: string; port?: number } }

type RequiredConfig = DeepRequired<{ db?: { host?: string } }>;
//   { db: { host: string } }

// -- Branded types (nominal typing) --
type Email = Brand<string, 'Email'>;
type UserId = Brand<string, 'UserId'>;

function sendEmail(to: Email, body: string) {}
sendEmail('user@example.com' as Email, 'Hello');

// -- String transformations --
type Camel = CamelCase<'hello_world'>;
//   'helloWorld'

type Snake = SnakeCase<'helloWorld'>;
//   'hello_world'

// -- Union to intersection --
type Merged = UnionToIntersection<{ a: string } | { b: number }>;
//   { a: string } & { b: number }

// -- Object immutability --
type Frozen = Immutable<{ a: { b: string } }>;
//   { readonly a: { readonly b: string } }

// -- Tuple utilities --
type ThreeStrings = Tuple<string, 3>;
//   [string, string, string]

type FirstEl = First<[string, number, boolean]>;
//   string

type LastEl = Last<[string, number, boolean]>;
//   boolean

// -- Filter by value type --
type OnlyStrings = PickByValue<{ a: string; b: number; c: string }, string>;
//   { a: string; c: string }

type NoStrings = OmitByValue<{ a: string; b: number; c: string }, string>;
//   { b: number }

// -- Deep path traversal --
type Obj = { a: { b: { c: number; d: string } } };
type NestedVal = PathValue<Obj, ['a', 'b', 'c']>;
//   number

type Picked = DeepPick<Obj, ['a', 'b']>;
//   { a: { b: { c: number; d: string } } }

type Omitted = DeepOmit<Obj, ['a', 'b']>;
//   { a: {} }

// -- Conditional / test types --
type T1 = IsNever<never>;    // true
type T2 = IsUnion<string | number>; // true
type T3 = IsAny<any>;        // true
type T4 = IfAny<any, 'yes', 'no'>; // 'yes'
```

## Type Reference

### Object Transformations

| Type | Description | Example |
|------|-------------|---------|
| `DeepPartial<T>` | Recursively makes all properties optional | `DeepPartial<{ a: { b: number } }>` → `{ a?: { b?: number } }` |
| `DeepRequired<T>` | Recursively makes all properties required | `DeepRequired<{ a?: { b?: number } }>` → `{ a: { b: number } }` |
| `Optional<T, K>` | Makes specific keys optional | `Optional<{ a: string; b: number }, 'a'>` → `{ a?: string; b: number }` |
| `Required<T, K>` | Makes specific keys required (key-specific, unlike built-in) | `Required<{ a?: string; b: number }, 'a'>` → `{ a: string; b: number }` |
| `Mutable<T>` | Removes `readonly` modifiers | `Mutable<{ readonly a: string }>` → `{ a: string }` |
| `Immutable<T>` | Recursively adds `readonly` modifiers | `Immutable<{ a: { b: string } }>` → `{ readonly a: { readonly b: string } }` |

### Nullability

| Type | Description | Example |
|------|-------------|---------|
| `NonNullable<T>` | Excludes `null` and `undefined` | `NonNullable<string \| null \| undefined>` → `string` |
| `Nullable<T>` | Adds `null` and `undefined` | `Nullable<string>` → `string \| null \| undefined` |

### Filtering

| Type | Description | Example |
|------|-------------|---------|
| `PickByValue<T, V>` | Picks keys whose values extend `V` | `PickByValue<{ a: string; b: number }, string>` → `{ a: string }` |
| `OmitByValue<T, V>` | Omits keys whose values extend `V` | `OmitByValue<{ a: string; b: number }, string>` → `{ b: number }` |

### Object Utilities

| Type | Description | Example |
|------|-------------|---------|
| `Entries<T>` | Entry tuples from object | `Entries<{ a: string; b: number }>` → `['a', string] \| ['b', number]` |
| `Values<T>` | Union of all value types | `Values<{ a: string; b: number }>` → `string \| number` |
| `UnionToIntersection<U>` | Converts union to intersection | `UnionToIntersection<{ a: string } \| { b: number }>` → `{ a: string } & { b: number }` |

### Function Types

| Type | Description | Example |
|------|-------------|---------|
| `AsyncReturnType<T>` | Resolved type of an async function | `AsyncReturnType<() => Promise<string>>` → `string` |
| `AsyncFunction` | Any async function signature | `const fn: AsyncFunction = async () => {}` |
| `Constructor<T, A>` | Constructor/class type | `Constructor<Person, [string]>` |

### Branding

| Type | Description | Example |
|------|-------------|---------|
| `Brand<T, B>` | Creates a branded/nominal type | `Email = Brand<string, 'Email'>` |

### Tuple Utilities

| Type | Description | Example |
|------|-------------|---------|
| `Tuple<T, N>` | Creates tuple of length `N` | `Tuple<string, 3>` → `[string, string, string]` |
| `First<T>` | First element type | `First<[string, number]>` → `string` |
| `Last<T>` | Last element type | `Last<[string, number]>` → `number` |
| `Tail<T>` | All but first element | `Tail<[string, number, boolean]>` → `[number, boolean]` |
| `Head<T>` | All but last element | `Head<[string, number, boolean]>` → `[string, number]` |

### Conditional / Test Types

| Type | Description | Example |
|------|-------------|---------|
| `IsNever<T>` | Checks if `T` is `never` | `IsNever<never>` → `true` |
| `IsUnion<T>` | Checks if `T` is a union | `IsUnion<string \| number>` → `true` |
| `IsEqual<T, U>` | Checks if `T` and `U` are equal | `IsEqual<string, string>` → `true` |
| `IsAny<T>` | Checks if `T` is `any` | `IsAny<any>` → `true` |
| `IfAny<T, A, B>` | Returns `A` if `T` is `any`, else `B` | `IfAny<any, 'yes', 'no'>` → `'yes'` |

### Deep Path / Nested Object Types

| Type | Description | Example |
|------|-------------|---------|
| `PathValue<T, P>` | Value type at a path tuple | `PathValue<{ a: { b: number } }, ['a', 'b']>` → `number` |
| `PathValues<T>` | All reachable value types | `PathValues<{ a: { b: number; c: string } }>` → `number \| string \| { b: number; c: string }` |
| `DeepPick<T, P>` | Pick nested property by path | `DeepPick<{ a: { b: number; c: string } }, ['a', 'b']>` → `{ a: { b: number } }` |
| `DeepOmit<T, P>` | Omit nested property by path | `DeepOmit<{ a: { b: number; c: string } }, ['a', 'b']>` → `{ a: { c: string } }` |

### String Transformations

| Type | Description | Example |
|------|-------------|---------|
| `SnakeCase<S>` | camelCase → snake_case | `SnakeCase<'helloWorld'>` → `'hello_world'` |
| `CamelCase<S>` | snake_case → camelCase | `CamelCase<'hello_world'>` → `'helloWorld'` |
| `KebabCase<S>` | camelCase → kebab-case | `KebabCase<'helloWorld'>` → `'hello-world'` |
| `UpperCase<S>` | Converts to uppercase | `UpperCase<'hello'>` → `'HELLO'` |
| `LowerCase<S>` | Converts to lowercase | `LowerCase<'HELLO'>` → `'hello'` |
| `Capitalize<S>` | Capitalizes first character | `Capitalize<'hello'>` → `'Hello'` |
| `Uncapitalize<S>` | Uncapitalizes first character | `Uncapitalize<'Hello'>` → `'hello'` |

## Advanced Usage

### Combining Types

```typescript
import type { DeepRequired, Immutable, Brand } from 'type-fns';

// Create a strict configuration type
type DatabaseConfig = Immutable<DeepRequired<{
  host?: string;
  port?: number;
  credentials?: { username?: string; password?: string };
}>>;

const config: DatabaseConfig = {
  host: 'localhost',
  port: 5432,
  credentials: { username: 'admin', password: 'secret' },
};
// All properties are required and readonly
```

### Branded Types with Intersection

```typescript
import type { Brand, UnionToIntersection } from 'type-fns';

type HasEmail = { email: string };
type HasName = { name: string };

type User = UnionToIntersection<HasEmail | HasName>;
//   { email: string } & { name: string }

type UserId = Brand<string, 'UserId'>;

function getUser(id: UserId): User {
  return { email: 'user@example.com', name: 'Alice' };
}
```

### Deep Path Utilities

```typescript
import type { PathValue, DeepPick, DeepOmit } from 'type-fns';

interface AppState {
  user: {
    profile: {
      name: string;
      age: number;
      address: {
        city: string;
        zip: string;
      };
    };
    preferences: {
      theme: 'light' | 'dark';
    };
  };
}

// Extract deeply nested types
type City = PathValue<AppState, ['user', 'profile', 'address', 'city']>;
//   string

// Pick only specific branches
type UserName = DeepPick<AppState, ['user', 'profile', 'name']>;
//   { user: { profile: { name: string } } }

// Omit sensitive data
type UserWithoutAddress = DeepOmit<AppState, ['user', 'profile', 'address']>;
//   { user: { profile: { name: string; age: number }; preferences: { theme: 'light' | 'dark' } } }
```

### String Transformations in Practice

```typescript
import type { CamelCase, SnakeCase, KebabCase } from 'type-fns';

type ApiResponse = {
  user_name: string;
  created_at: string;
};

// Transform API snake_case to camelCase
type Camelized = {
  [K in keyof ApiResponse as CamelCase<K & string>]: ApiResponse[K];
};
//   { userName: string; createdAt: string }
```

### Type Guards with Conditional Types

```typescript
import type { IsNever, IsUnion, IsAny } from 'type-fns';

// Ensure a type parameter is not `never`
type AssertNotNever<T> = IsNever<T> extends true ? never : T;

// Ensure a type parameter is not a union
type AssertNotUnion<T> = IsUnion<T> extends true ? never : T;

// Ensure a type parameter is not `any`
type AssertNotAny<T> = IsAny<T> extends true ? never : T;

// Usage
function process<T>(value: AssertNotNever<T>): void {}
```

## License

MIT © [Daksh Singh Dhami](https://github.com/DakshSinghDhami)

---

**type-fns** — TypeScript utility types for the modern developer.
