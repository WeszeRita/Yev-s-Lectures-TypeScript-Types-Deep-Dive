import { Equal, Expect } from '../../../helpers';

interface User {
  id: number;
  name: string;
  email: string;
}

/*
 * TODO: Extract all fields of the input interface.
 */
type ExtractFields<T> = keyof User;


/* Test the result */
type tests = [
  Expect<
    Equal<
      ExtractFields<User>,
      'id' | 'name' | 'email'
    >
  >
];
