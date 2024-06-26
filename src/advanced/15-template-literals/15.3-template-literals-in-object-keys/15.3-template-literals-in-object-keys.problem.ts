import { Equal, Expect } from '../../../helpers';

/*
 * TODO: Declare an object type
 *  that will include all combinations of TemplateLiteralKey keys
 *  and will have string types.
 */
type TemplateLiteralKey = `${ 'user' | 'post' | 'comment' }${ 'Id' | 'Name' }`;

type ObjectOfKeys = {
  [key in TemplateLiteralKey]: string;
};


/* Test the result */
type tests = [
  Expect<
    Equal<
      ObjectOfKeys,
      {
        userId: string;
        userName: string;
        postId: string;
        postName: string;
        commentId: string;
        commentName: string;
      }
    >
  >,
];
