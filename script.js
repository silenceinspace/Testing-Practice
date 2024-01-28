export { capitalize, reverseString, Calculator, caeserCipher};

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

const caeserCipher = (text, key) => {
  const string = text.toUpperCase();

  if (key === 0) return string;

  const alphabet = ' .,?!abcdefghijklmnopqrstuvwxyz'.toUpperCase();
  const modified = modifyAlphabet(alphabet, key);
  const shiftedText = shiftCharacters(string, alphabet, modified);
  return shiftedText;
};

const modifyAlphabet = (alphabet, key) => {
  const originalAlphabet = alphabet.split('');

  let shiftedPart;
  let shiftedArray;
  if (key < 0) {
    shiftedPart = originalAlphabet.splice(originalAlphabet.length + key);
    shiftedArray = [...shiftedPart, ...originalAlphabet];
  } else if (key > 0) {
    shiftedPart = originalAlphabet.splice(0, key);
    shiftedArray = [...originalAlphabet, ...shiftedPart];
  }

  return shiftedArray;
};

const shiftCharacters = (string, alphabet, modified) => {
  const indexes = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "'") {
      indexes.push(string[i]);
      continue;
    } else {
      for (let j = 0; j < alphabet.length; j++) {
        if (string[i] === alphabet[j]) {
          indexes.push(j);
          break;
        }
      }
    }
  }

  let output = '';
  indexes.forEach((index) => {
    if (index === "'") {
      output += index;
    } else {
      const shiftedChar = modified[index];
      output += shiftedChar;
    }
  });

  return output;
};
