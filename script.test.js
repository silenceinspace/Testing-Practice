import { capitalize, reverseString } from './script.js';

describe('First character is capitalized', () => {
  test('in a word', () => {
    expect(capitalize('hello')).toMatch(/^[A-Z]\w+$/);
  });

  test('in a sentence', () => {
    expect(capitalize('hello world.')).toMatch(/^[A-Z][\w\s.]+$/);
  });
});

describe('Character order is reversed', () => {
  test('in a word', () => {
    expect(reverseString('sleep')).toMatch('peels');
  });

  test('in a sentence', () => {
    expect(reverseString('I am sleepy today.')).toMatch('.yadot ypeels ma I');
  });
});
