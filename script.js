export { capitalize, reverseString, Calculator };

const capitalize = (str) => {
  const firstChar = str.charAt(0);
  const isCapitalized = firstChar.toUpperCase();
  return str.replace(firstChar, isCapitalized);
};

const reverseString = (str) => {
  const arrayOfChar = str.split('');
  return arrayOfChar.reverse().join('');
};

class Calculator {
  static add(num1, num2) {
    return Number(num1) + Number(num2);
  }

  static subtract(num1, num2) {
    return num1 - num2;
  }

  static divide(num1, num2) {
    if (!num2) return 'Cannot divide by 0';
    else return num1 / num2;
  }

  static multiply(num1, num2) {
    return num1 * num2;
  }
}
