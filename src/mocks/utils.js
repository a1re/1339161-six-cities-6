export const getRandomNumber = (min, max) => {
  const randomInt = min + Math.random() * (max + 1 - min);
  return Math.floor(randomInt);
};

export const randomSort = (arr) => arr.slice(0).sort(() => Math.random() - 0.5);

export const getRandomBoolean = () => Math.random() < 0.5;
