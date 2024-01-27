import { capitalize } from './script.js';

describe('First character is capitalized', () => {
  test('in a word', () => {
    expect(capitalize('hello')).toMatch(/^[A-Z]\w+$/);
  });

  test('in a sentence', () => {
    expect(capitalize('hello world.')).toMatch(/^[A-Z][\w\s.]+$/);
  });
});
