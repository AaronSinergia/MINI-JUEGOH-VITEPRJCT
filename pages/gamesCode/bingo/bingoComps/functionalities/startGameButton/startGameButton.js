import startsTheGame from './startsTheGame';
import './startGameButton.css';

const startGameButton = (numbersObtainedRandomly) => {
  const startButton = document.createElement('button');
  startButton.innerText = '¡EMPEZAR!';
  startButton.className = 'start_btn';

  startButton.addEventListener('click', () =>
    startsTheGame(numbersObtainedRandomly)
  );

  return startButton;
};

export default startGameButton;
