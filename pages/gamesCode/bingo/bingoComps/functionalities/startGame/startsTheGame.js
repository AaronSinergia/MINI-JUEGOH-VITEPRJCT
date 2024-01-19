import { randomizeNumbers } from '../../../../../../functions/randomizeNumbers';
import stopTheGame from '../stopGame/stopTheGame';

const startsTheGame = () => {
  const tableDiv = document.querySelector('.div_bingo');

  const startClickedButton = document.querySelector('.start_btn');
  startClickedButton.style.display = 'none';

  const randomNumberSelected = document.querySelector(
    '.number_selected_random'
  );
  randomNumberSelected.innerHTML = 'Starting...';

  let intervalSet = setInterval(function intervalRandomNumber() {
    randomNumberSelected.innerHTML = randomizeNumbers(1, 99);
    randomNumberSelected.style.fontSize = '40px';
  }, 3000);

  const stopButton = stopTheGame(intervalSet);

  tableDiv.appendChild(stopButton);
};

export default startsTheGame;
