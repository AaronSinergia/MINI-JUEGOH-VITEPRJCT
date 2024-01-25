import { randomBingoCard } from '../../../../../../functions/randomBingoCard';
import { randomizeNumbers } from '../../../../../../functions/randomizeNumbers';

let stopInterval;
const restartAndResumeButtons = (intervalSet) => {
  const tableDiv = document.querySelector('.div_bingo');

  const randomNumberSelected = document.querySelector(
    '.number_selected_random'
  );
  randomNumberSelected.innerHTML = 'Parado';
  randomNumberSelected.style.fontSize = '15px';

  const stopButton = document.querySelector('.stop_btn');
  stopButton.style.display = 'none';

  clearInterval(intervalSet);

  const resumeButton = document.createElement('button');
  resumeButton.innerText = 'REANUDAR/PARAR';
  resumeButton.className = 'resume_btn';

  function resumedGame() {
    const toggleOn = resumeButton.classList.toggle('active');

    if (toggleOn) {
      randomNumberSelected.innerHTML = 'Reanudando...';
      stopInterval = setInterval(function intervalRandomNumber() {
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
    } else {
      clearInterval(stopInterval);
      randomNumberSelected.innerHTML = 'Parado';
    }

    randomNumberSelected.style.fontSize = '10px';
  }
  resumeButton.addEventListener('click', () => resumedGame());

  const restartButton = document.createElement('button');
  restartButton.innerText = 'REINICIAR';
  restartButton.className = 'restart_btn';

  function restartedGame() {
    randomNumberSelected.innerHTML = 'Iniciando...';
    randomNumberSelected.style.fontSize = '13px';
    clearInterval(stopInterval);

    const tdBingoClass = document.querySelectorAll('.td_bingo');
    tdBingoClass.forEach((td) => {
      td.classList.remove('td_bingo_painted');
    });

    stopInterval = setInterval(function intervalRandomNumber() {
      randomNumberSelected.innerHTML = randomizeNumbers(1, 99);
      randomNumberSelected.style.fontSize = '40px';

      const randomNumber = randomNumberSelected.innerHTML;

      tdBingoClass.forEach((td) => {
        const tdInnerHTML = td.innerHTML;
        if (randomNumber == tdInnerHTML) {
          td.classList.add('td_bingo_painted');
        }
      });
    }, 2000);

    const td = document.querySelectorAll('.td_bingo');
    td.forEach((cell) => (cell.innerHTML = randomBingoCard(1, 99)));
  }
  restartButton.addEventListener('click', () => restartedGame());

  tableDiv.appendChild(resumeButton);
  tableDiv.appendChild(restartButton);
};

export default restartAndResumeButtons;
