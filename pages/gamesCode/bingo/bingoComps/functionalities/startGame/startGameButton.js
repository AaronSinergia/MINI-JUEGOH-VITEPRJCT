import startsTheGame from './startsTheGame';

const startGameButton = () => {
  const startButton = document.createElement('button');
  startButton.innerText = '¡EMPEZAR!';
  startButton.className = 'start_btn';

  startButton.addEventListener('click', () => startsTheGame());

  return startButton;
};

export default startGameButton;
