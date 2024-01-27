import printRandomNumber from '../printRandomNumber/printRandomNumber';
import stopTheGame from '../stopGame/stopTheGame';
import paintedLine from '../winOrLose/paintedLine';

let numbersObtainedRandomly = [];
const startsTheGame = () => {
  const tableDiv = document.querySelector('.div_bingo');

  const startClickedButton = document.querySelector('.start_btn');
  startClickedButton.style.display = 'none';

  const randomNumberSelected = document.querySelector(
    '.number_selected_random'
  );
  randomNumberSelected.innerHTML = 'Iniciando...';

  let intervalSet = setInterval(function intervalRandomNumber() {
    printRandomNumber(intervalSet, numbersObtainedRandomly);
  }, 700);

  const stopButton = stopTheGame(intervalSet);
  tableDiv.appendChild(stopButton);
};

export default startsTheGame;
