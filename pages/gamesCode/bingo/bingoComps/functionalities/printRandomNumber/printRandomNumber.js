import { randomizeNumbers } from '../../../../../../functions/randomizeNumbers';
import paintedLine from '../winOrLose/paintedLine';

function printRandomNumber(intervalSet, numbersObtainedRandomly) {
  const randomNumberSelected = document.querySelector(
    '.number_selected_random'
  );

  const randomNumber = (randomNumberSelected.innerHTML = randomizeNumbers(
    1,
    99
  ));
  randomNumberSelected.style.fontSize = '38px';

  numbersObtainedRandomly.push(randomNumber);

  if (numbersObtainedRandomly.length == 80) {
    clearInterval(intervalSet);
  }

  const tdBingoClass = document.querySelectorAll('.td_bingo');

  tdBingoClass.forEach((td) => {
    const tdInnerHTML = parseInt(td.innerHTML);
    if (randomNumber === tdInnerHTML) {
      td.classList.add('td_bingo_painted');
    }
  });

  setTimeout(() => {
    paintedLine(numbersObtainedRandomly);
  }, 10);
}

export default printRandomNumber;
