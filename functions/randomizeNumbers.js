let sortedArrayRandomNumbers = new Set();

export const randomizeNumbers = (min, max) => {
  let randomNumber;

  do {
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (sortedArrayRandomNumbers.has(randomNumber));

  sortedArrayRandomNumbers.add(randomNumber);

  return randomNumber;
};
