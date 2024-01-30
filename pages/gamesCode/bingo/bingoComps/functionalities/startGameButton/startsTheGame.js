import printRandomNumber from '../printRandomNumber/printRandomNumber';
import stopTheGame from '../stopGameButton/stopTheGame';

const startsTheGame = (numbersObtainedRandomly) => {
  const tableDiv = document.querySelector('.div_bingo');

  const startClickedButton = document.querySelector('.start_btn');
  startClickedButton.style.display = 'none';

  const tableSection = document.querySelector('section');

  const randomNumberSelected = document.querySelector(
    '.number_selected_random'
  );
  randomNumberSelected.innerHTML = 'Iniciando...';

  const buttonLine = document.querySelector('.linea_button');
  buttonLine.style.display = 'flex';

  let intervalSet = setInterval(function intervalRandomNumber() {
    printRandomNumber(intervalSet, numbersObtainedRandomly);
  }, 700);

  const stopButton = stopTheGame(intervalSet, numbersObtainedRandomly);
  tableDiv.insertBefore(stopButton, tableSection);
};

export default startsTheGame;
