import { randomBingoCard } from '../../../../../../functions/randomBingoCard';
import printRandomNumber from '../printRandomNumber/printRandomNumber';
import restartButton from './restartButton/restartButton';
import resumeButton from './resumeButton/resumeButton';

let stopInterval;
const restartAndResumeGame = (intervalSet, numbersObtainedRandomly) => {
  clearInterval(intervalSet);
  const tableDiv = document.querySelector('.div_bingo');

  const randomNumberSelected = document.querySelector(
    '.number_selected_random'
  );
  randomNumberSelected.innerHTML = 'Parado';
  randomNumberSelected.style.fontSize = '16px';

  const stopButton = document.querySelector('.stop_btn');
  stopButton.style.display = 'none';

  const resumeBttn = resumeButton();
  function resumedGame() {
    const toggleOn = resumeBttn.classList.toggle('active');
    const randomNumberSelected = document.querySelector(
      '.number_selected_random'
    );

    if (toggleOn) {
      randomNumberSelected.innerHTML = 'Parado';
      randomNumberSelected.style.fontSize = '16px';
      randomNumberSelected.innerHTML = 'Reanudando...';

      stopInterval = setInterval(function intervalRandomNumber() {
        printRandomNumber(intervalSet, numbersObtainedRandomly);
      }, 700);
    } else {
      clearInterval(stopInterval);
      randomNumberSelected.innerHTML = 'Parado';
    }

    randomNumberSelected.style.fontSize = '10px';
  }
  resumeBttn.addEventListener('click', () => resumedGame());

  const restartBttn = restartButton();
  function restartedGame(numbersObtainedRandomly) {
    numbersObtainedRandomly = [];
    randomNumberSelected.innerHTML = 'Iniciando...';
    randomNumberSelected.style.fontSize = '13px';
    clearInterval(stopInterval);

    const tdBingoClass = document.querySelectorAll('.td_bingo');
    tdBingoClass.forEach((td) => {
      td.classList.remove('td_bingo_painted');
    });

    stopInterval = setInterval(function intervalRandomNumber() {
      printRandomNumber(intervalSet, numbersObtainedRandomly);
    }, 700);

    const td = document.querySelectorAll('.td_bingo');
    td.forEach((cell) => (cell.innerHTML = randomBingoCard(1, 99)));

    const lineButton = document.querySelector('.linea_button');
    const bingoButton = document.querySelector('.bingo_button');

    if (bingoButton.style.display === 'flex') {
      bingoButton.style.display = 'none';
      lineButton.style.display = 'flex';
    }
  }
  restartBttn.addEventListener('click', () =>
    restartedGame(numbersObtainedRandomly)
  );

  tableDiv.appendChild(resumeBttn);
  tableDiv.appendChild(restartBttn);
};

export default restartAndResumeGame;
