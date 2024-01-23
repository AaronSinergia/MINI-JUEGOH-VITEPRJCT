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

    const randomNumber = randomNumberSelected.innerHTML;
    const tdBingoClass = document.querySelectorAll('.td_bingo');

    tdBingoClass.forEach((td) => {
      const tdInnerHTML = td.innerHTML;

      if (randomNumber == tdInnerHTML) {
        td.classList.add('td_bingo_painted');
      }
    });
  }, 2000);

  const stopButton = stopTheGame(intervalSet);

  tableDiv.appendChild(stopButton);
};

export default startsTheGame;
