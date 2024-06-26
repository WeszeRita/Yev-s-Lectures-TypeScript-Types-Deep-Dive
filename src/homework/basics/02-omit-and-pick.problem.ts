import { Equal, Expect } from '../../helpers';

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

/*
 * TODO: create a new object type with only the firstName and lastName properties of User.
 */
type MyType2 = Omit<User, 'id'>;
type MyType = Pick<User, 'lastName' | 'firstName'>;


/* Test the result */
type tests = [
  Expect<
    Equal<
      MyType,
      { firstName: string; lastName: string }
    >
  >
];
