const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (max > min) {
    return Math.floor(Math.random() * (max - min)) + min;
  } else {
    throw new Error('Неверные входные данные');
  }
};
getRandomIntInclusive(5, 55);

const isStringLengthCorrect = (stringContent, maxLength) => stringContent.length <= maxLength;
isStringLengthCorrect('academy', 140);
