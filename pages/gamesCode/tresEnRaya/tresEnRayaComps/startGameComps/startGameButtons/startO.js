import startGame from '../startGame';

const startO = () => {
  const startsOButton = document.createElement('button');
  startsOButton.innerText = 'Play O';
  startsOButton.className = 'O';

  startsOButton.addEventListener('click', (ev) => startGame(ev));

  return startsOButton;
};

export default startO;
