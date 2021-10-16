const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (max > min) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  throw new Error('Неверные входные данные');
};

export { getRandomIntInclusive };
