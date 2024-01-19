import { randomizeNumbers } from '../../../../../../functions/randomizeNumbers';

let stopInterval;
const restartAndResumeButtons = (intervalSet) => {
  const tableDiv = document.querySelector('.div_bingo');

  const randomNumberSelected = document.querySelector(
    '.number_selected_random'
  );
  randomNumberSelected.innerHTML = 'Stopped';
  randomNumberSelected.style.fontSize = '15px';

  const stopButton = document.querySelector('.stop_btn');
  stopButton.style.display = 'none';

  clearInterval(intervalSet);

  const resumeButton = document.createElement('button');
  resumeButton.innerText = 'REANUDAR';
  resumeButton.className = 'resume_btn';

  function resumedGame() {
    const toggleOn = resumeButton.classList.toggle('active');

    if (toggleOn) {
      randomNumberSelected.innerHTML = 'Reanudando...';
      stopInterval = setInterval(function intervalRandomNumber() {
        randomNumberSelected.innerHTML = randomizeNumbers(1, 99);
        randomNumberSelected.style.fontSize = '40px';
      }, 3000);
    } else {
      clearInterval(stopInterval);
      randomNumberSelected.innerHTML = 'Stopped';
    }

    randomNumberSelected.style.fontSize = '10px';
  }
  resumeButton.addEventListener('click', () => resumedGame());

  const restartButton = document.createElement('button');
  restartButton.innerText = 'REINICIAR';
  restartButton.className = 'restart_btn';

  function restartedGame() {
    randomNumberSelected.innerHTML = 'Starting...';
    randomNumberSelected.style.fontSize = '15px';
    clearInterval(stopInterval);

    stopInterval = setInterval(function intervalRandomNumber() {
      randomNumberSelected.innerHTML = randomizeNumbers(1, 99);
      randomNumberSelected.style.fontSize = '40px';
    }, 3000);

    const td = document.querySelectorAll('.td_bingo');
    td.forEach((cell) => (cell.innerHTML = randomizeNumbers(1, 99)));
  }
  restartButton.addEventListener('click', () => restartedGame());

  tableDiv.appendChild(resumeButton);
  tableDiv.appendChild(restartButton);
};

export default restartAndResumeButtons;
