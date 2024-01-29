import {
  capitalize,
  reverseString,
  Calculator,
  caeserCipher,
  analyzeArray,
} from './script.js';

// 1) Capitalize() function that takes a string and returns it with the first character capitalized.
describe('First character is capitalized', () => {
  test('in a word', () => {
    expect(capitalize('hello')).toMatch(/^[A-Z]\w+$/);
  });

  test('in a sentence', () => {
    expect(capitalize('hello world.')).toMatch(/^[A-Z][\w\s.]+$/);
  });
});

// 2) ReverseString() function that takes a string and returns it reversed.
describe('Character order is reversed', () => {
  test('in a word', () => {
    expect(reverseString('sleep')).toMatch('peels');
  });

  test('in a sentence', () => {
    expect(reverseString('I am sleepy today.')).toMatch('.yadot ypeels ma I');
  });
});

// 3) Calculator object that contains functions for the basic operations: add, subtract, divide, and multiply. Each of these functions should take two numbers and return the correct calculation.
describe('Check the correctness of addition in a calculator', () => {
  test('5 + 5 equals 10', () => {
    expect(Calculator.add(5, 5)).toBe(10);
  });

  test('130 + 170 equals 300', () => {
    expect(Calculator.add(130, 170)).toBe(300);
  });

  test('0.2 + 0.1 equals 0.3 (disregarding floating points)', () => {
    expect(Calculator.add(0.2, 0.1)).toBeCloseTo(0.3);
  });

  test('"5" + 15 equals 20 (disregarding auto JS coercion)', () => {
    expect(Calculator.add('5', 15)).toBe(20);
  });
});

describe('Check the correctness of subtraction in a calculator', () => {
  test('10 - 5 equals 5', () => {
    expect(Calculator.subtract(10, 5)).toBe(5);
  });

  test('100 - 200 equals -100', () => {
    expect(Calculator.subtract(100, 200)).toBe(-100);
  });

  test('1 - 1 equals 0', () => {
    expect(Calculator.subtract(1, 1)).toBe(0);
  });
});

describe('Check the correctness of division in a calculator', () => {
  test('20 / 5 equals 4', () => {
    expect(Calculator.divide(20, 5)).toBe(4);
  });

  test('1 / 1 equals 1', () => {
    expect(Calculator.divide(1, 1)).toBe(1);
  });

  test('10 / 100 equals 0.1', () => {
    expect(Calculator.divide(10, 100)).toBe(0.1);
  });

  test('5/0 equals cannot divide by 0', () => {
    expect(Calculator.divide(5, 0)).toBe('Cannot divide by 0');
  });
});

describe('Check the correctness of multiplication in a calculator', () => {
  test('5 * 5 equals 25', () => {
    expect(Calculator.multiply(5, 5)).toBe(25);
  });

  test('10000 * 0.15 equals 1500', () => {
    expect(Calculator.multiply(10000, 0.15)).toBe(1500);
  });

  test('333 * 0 equals 0', () => {
    expect(Calculator.multiply(333, 0)).toBe(0);
  });
});

// 4) CaesarCipher() function that takes a string and a shift factor and returns it with each character “shifted”.
describe('Encrypt text with the caeser shift', () => {
  test('ABC with key 3 is encrypted as DEF', () => {
    expect(caeserCipher('ABC', 3)).toMatch('DEF');
  });

  test('HELLO WORLD with key -1 is encrypted as GDKKNZVNQKC', () => {
    expect(caeserCipher('HELLO WORLD', -1)).toMatch('GDKKNZVNQKC');
  });

  test('CAESER with key 0 is encrypted as CAESER', () => {
    expect(caeserCipher('CAESER', 0)).toMatch('CAESER');
  });

  test("Let's go! with key 5 is encrypted as QJY'XALT", () => {
    expect(caeserCipher("Let's go!", 5)).toMatch("QJY'XALT");
  });
});

// 5) AnalyzeArray() function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.
describe('Analyze the provided data in an array', () => {
  test('Array [1,8,3,4,2,6] returns {average:4, min:1, max:8, length:6}', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });

  test('Array [0,-8,100,8,7,1,-33,8] returns {average:10.4, min:-33, max:100, length:8}', () => {
    expect(analyzeArray([0, -8, 100, 8, 7, 1, -33, 8])).toEqual({
      average: 10.4,
      min: -33,
      max: 100,
      length: 8,
    });
  });

  test('Array [1] returns {average:1, min:1, max:1, length:1}', () => {
    expect(analyzeArray([1])).toEqual({
      average: 1,
      min: 1,
      max: 1,
      length: 1,
    });
  });

  test('Array [] returns Null', () => {
    expect(analyzeArray([])).toBeNull();
  });
});
