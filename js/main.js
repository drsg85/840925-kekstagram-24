const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return (max > min) ? Math.floor(Math.random() * (max - min)) + min : console.log('Минимальное число не должно быть больше максимального и не должно ему равняться');
};
getRandomIntInclusive(5, 55);

const getStringLength = (stringName, maxLength) => {
  let condition = false;
  condition = (stringName.length <= maxLength);
  console.log(condition);
};
getStringLength('academy', 140);
