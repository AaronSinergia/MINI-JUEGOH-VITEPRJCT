import { randomizeNumbers } from '../../../../../../functions/randomizeNumbers';
import stopTheGame from '../stopGame/stopTheGame';

const startsTheGame = () => {
  let numbersForWin = [];
  let arrayOfWinners = [];
  const tableDiv = document.querySelector('.div_bingo');

  const startClickedButton = document.querySelector('.start_btn');
  startClickedButton.style.display = 'none';

  const randomNumberSelected = document.querySelector(
    '.number_selected_random'
  );
  randomNumberSelected.innerHTML = 'Iniciando...';

  let intervalSet = setInterval(function intervalRandomNumber() {
    randomNumberSelected.innerHTML = randomizeNumbers(1, 99);
    randomNumberSelected.style.fontSize = '38px';

    const randomNumber = randomNumberSelected.innerHTML;
    const tdBingoClass = document.querySelectorAll('.td_bingo');

    if (!numbersForWin.includes(randomNumber)) {
      numbersForWin.push(randomNumber);
    }

    numbersForWin.forEach((num) => {
      const tdClassBingoPainted =
        document.querySelectorAll('.td_bingo_painted');
      [...tdClassBingoPainted].forEach((numPainted) => {
        if (numPainted.innerHTML == num) {
          if (!arrayOfWinners.includes(num)) {
            arrayOfWinners.push(num);
            if (arrayOfWinners.length == 20) {
              alert(`¡BINGO! Has ganado!!!`);
              console.log(`¡BINGO! Has ganado!!!`);
            }
          }
        }
      });
    });

    tdBingoClass.forEach((td) => {
      const tdInnerHTML = td.innerHTML;

      if (randomNumber == tdInnerHTML) {
        td.classList.add('td_bingo_painted');
      }
    });
  }, 200);

  const stopButton = stopTheGame(intervalSet);

  tableDiv.appendChild(stopButton);
};

export default startsTheGame;
