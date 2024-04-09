import { Equal, Expect } from '../../../helpers';

const fakeDataDefaults = {
  String: 'Default string',
  Int: 1,
  Float: 1.14,
  Boolean: true,
  ID: 'id',
};

/*
 * TODO: Extract types of the fakeDataDefaults object fields.
 */
type StringType = typeof fakeDataDefaults['String'];
type IntType = typeof fakeDataDefaults['Int'];
type FloatType = typeof fakeDataDefaults['Float'];
type BooleanType = typeof fakeDataDefaults['Boolean'];
type IDType = typeof fakeDataDefaults['ID'];


/* Test the result */
type tests = [
  Expect<Equal<StringType, string>>,
  Expect<Equal<IntType, number>>,
  Expect<Equal<FloatType, number>>,
  Expect<Equal<BooleanType, boolean>>,
  Expect<Equal<IDType, string>>,
];
