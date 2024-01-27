export { capitalize };

const capitalize = (str) => {
  const firstChar = str.charAt(0);
  const isCapitalized = firstChar.toUpperCase();
  return str.replace(firstChar, isCapitalized);
};
