import startGame from '../startGame';

const startX = () => {
  const startsXButton = document.createElement('button');
  startsXButton.innerText = 'Play X';
  startsXButton.className = 'X';

  startsXButton.addEventListener('click', (ev) => startGame(ev));

  return startsXButton;
};

export default startX;
