/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/00300-hard-string-to-number/README.md
 */

import type { Equal, Expect } from '@type-challenges/utils'

type ToNumber<S extends string> = S extends `${infer N extends number}` ? N : never

export type cases = [
  Expect<Equal<ToNumber<'0'>, 0>>,
  Expect<Equal<ToNumber<'5'>, 5>>,
  Expect<Equal<ToNumber<'12'>, 12>>,
  Expect<Equal<ToNumber<'27'>, 27>>,
  Expect<Equal<ToNumber<'18@7_$%'>, never>>,
]
