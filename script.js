export { capitalize, reverseString };

const capitalize = (str) => {
  const firstChar = str.charAt(0);
  const isCapitalized = firstChar.toUpperCase();
  return str.replace(firstChar, isCapitalized);
};

const reverseString = (str) => {
  const arrayOfChar = str.split('');
  return arrayOfChar.reverse().join('');
};
