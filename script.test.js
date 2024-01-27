import { capitalize, reverseString, Calculator } from './script.js';

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

describe('Check the correctness of addition in a calculator', () => {
  test('5 + 5 equals 10', () => {
    expect(Calculator.add(5, 5)).toEqual(10);
  });

  test('130 + 170 equals 300', () => {
    expect(Calculator.add(130, 170)).toEqual(300);
  });

  test('0.2 + 0.1 equals 0.3 (disregarding floating points)', () => {
    expect(Calculator.add(0.2, 0.1)).toBeCloseTo(0.3);
  });

  test('"5" + 15 equals 20 (disregarding auto JS coercion)', () => {
    expect(Calculator.add('5', 15)).toEqual(20);
  });
});

describe('Check the correctness of subtraction in a calculator', () => {
  test('10 - 5 equals 5', () => {
    expect(Calculator.subtract(10, 5)).toEqual(5);
  });

  test('100 - 200 equals -100', () => {
    expect(Calculator.subtract(100, 200)).toEqual(-100);
  });

  test('1 - 1 equals 0', () => {
    expect(Calculator.subtract(1, 1)).toEqual(0);
  });
});

describe('Check the correctness of division in a calculator', () => {
  test('20 / 5 equals 4', () => {
    expect(Calculator.divide(20, 5)).toEqual(4);
  });

  test('1 / 1 equals 1', () => {
    expect(Calculator.divide(1, 1)).toEqual(1);
  });

  test('10 / 100 equals 0.1', () => {
    expect(Calculator.divide(10, 100)).toEqual(0.1);
  });

  test('5/0 equals cannot divide by 0', () => {
    expect(Calculator.divide(5, 0)).toEqual('Cannot divide by 0');
  });
});

describe('Check the correctness of multiplication in a calculator', () => {
  test('5 * 5 equals 25', () => {
    expect(Calculator.multiply(5, 5)).toEqual(25);
  });

  test('10000 * 0.15 equals 1500', () => {
    expect(Calculator.multiply(10000, 0.15)).toEqual(1500);
  });

  test('333 * 0 equals 0', () => {
    expect(Calculator.multiply(333, 0)).toEqual(0);
  });
});
