addValidator('word-pattern', (value, pattern) => {
  const words = segmentWords(value);
  const regExp = new RegExp(`^${pattern}$`, 'i');

  return words.every((item) => regExp.test(item));
});

addValidator('unique-words', (value) => {
  const words = segmentWords(value.toLowerCase());
  const wordSet = new Set(words);

  return wordSet.size === words.length;
});

addValidator('words-maxlength', (value, limit) => {
  const words = segmentWords(value);
  const maxLength = Number(limit);

  return words.every(item => item.length <= maxLength);
});

addValidator('max-words', (value, limit) => {
  const words = segmentWords(value);
  const maxLength = Number(limit);

  return words.length <= maxLength;
})
/**
 * @param {string} name
 * @param {(...args: Array<string>) => boolean} validator
 */
function addValidator(name, validator) {
  // @ts-ignore
  Pristine.addValidator(name, validator, null, 1, true);
}

function segmentWords(value) {
  return value.split(' ').filter(Boolean);
}
