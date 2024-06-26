import { Equal, Expect } from '../../helpers';

/*
 * TODO: How do we type onFocusChange?
 */
const addListener = (onFocusChange: (param: boolean) => void) => {
  window.addEventListener('focus', () => {
    onFocusChange(true);
  });

  window.addEventListener('blur', () => {
    onFocusChange(false);
  });
};


/* Test the result */
addListener((isFocused) => {
  type tests = [
    Expect<
      Equal<
        typeof isFocused,
        boolean
      >
    >
  ];
});
