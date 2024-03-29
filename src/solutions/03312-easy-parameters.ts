/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/03312-easy-parameters/README.md
 */

import type { Equal, Expect } from '@type-challenges/utils'

type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer Args) => any
  ? Args
  : never

const foo = (arg1: string, arg2: number): void => {}
const bar = (arg1: boolean, arg2: { a: 'A' }): void => {}
const baz = (): void => {}

export type cases = [
  Expect<Equal<MyParameters<typeof foo>, [string, number]>>,
  Expect<Equal<MyParameters<typeof bar>, [boolean, { a: 'A' }]>>,
  Expect<Equal<MyParameters<typeof baz>, []>>,
]
