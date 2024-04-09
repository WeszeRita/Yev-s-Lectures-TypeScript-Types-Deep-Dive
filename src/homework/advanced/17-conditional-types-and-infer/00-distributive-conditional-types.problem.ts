import { Equal, Expect } from '../../../helpers';

type Fruit = 'apple' | 'banana' | 'orange';

type AppleOrBanana<T, A, B, C> = T extends A | B | C
  ? Extract<T, A | B>
  : never;

/* Test the result */
type tests = [
  Expect<
    Equal<
      AppleOrBanana,
      'apple' | 'banana'
    >
  >
];
