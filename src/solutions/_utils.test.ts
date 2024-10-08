import { expect, it } from 'vitest'

import type {
  Alike,
  Equal,
  Expect,
  ExpectFalse,
  ExpectTrue,
  IsAny,
  IsFalse,
  IsTrue,
  NotEqual,
} from './_utils'

export type cases = [
  Expect<true>,
  // @ts-expect-error
  Expect<false>,

  // @ts-expect-error
  ExpectFalse<true>,
  ExpectFalse<false>,

  Expect<IsTrue<true>>,
  // @ts-expect-error
  Expect<IsFalse<false>>,

  Expect<Equal<true, true>>,
  ExpectFalse<Equal<true, false>>,
  ExpectTrue<Equal<'foo', 'foo'>>,
  Expect<Equal<{ a: number }, { a: number }>>,
  ExpectFalse<Equal<any, '123'>>,
  ExpectFalse<Equal<any, unknown>>,

  Expect<NotEqual<false, true>>,
  ExpectFalse<NotEqual<true, true>>,

  Expect<IsAny<any>>,
  ExpectFalse<IsAny<1>>,

  Expect<Alike<{ a: 1 } & { b: 2 }, { a: 1; b: 2 }>>,
  ExpectFalse<Equal<{ a: 1 } & { b: 2 }, { a: 1; b: 2 }>>,
]

it('skip', () => {
  expect(true).toBe(true)
})
