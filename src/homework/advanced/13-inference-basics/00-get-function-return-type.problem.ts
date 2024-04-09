import { Equal, Expect } from '../../../helpers';

const myFunc = () => {
  return 'hello';
};

/*
 * TODO: Extract the myFunc() function return type.
 */
type MyFuncReturn = ReturnType<typeof  myFunc>;


/* Test the result */
type tests = [
  Expect<Equal<MyFuncReturn, string>>
];
