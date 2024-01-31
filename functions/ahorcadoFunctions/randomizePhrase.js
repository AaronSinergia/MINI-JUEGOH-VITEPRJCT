const randomizePhrase = (array) => {
  const randomizer = Math.floor(Math.random() * array.length);

  let randomPhraseSelected = array[randomizer];

  const singlePhrase = document.createElement('span');
  singlePhrase.className = 'hidden_word';
  singlePhrase.id = randomPhraseSelected;

  for (const word of randomPhraseSelected) {
    const oneWord = document.createElement('h2');
    oneWord.className = word + ' word';
    oneWord.innerHTML = '_';

    singlePhrase.appendChild(oneWord);
  }

  return singlePhrase;
};

export default randomizePhrase;
