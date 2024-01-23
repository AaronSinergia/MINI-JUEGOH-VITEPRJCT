let noRepeatedArrayRandomNumber = new Set();

export const randomBingoCard = (min, max) => {
  let randomNumber;

  do {
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (noRepeatedArrayRandomNumber.has(randomNumber));

  noRepeatedArrayRandomNumber.add(randomNumber);

  return randomNumber;
};
