import { randomizeNumbers } from '../../../../../../functions/bingoFunctions/randomizeNumbers';

import './printRandomNumber.css';

function printRandomNumber(intervalSet, numbersObtainedRandomly) {
  const randomNumberSelected = document.querySelector(
    '.number_selected_random'
  );
  randomNumberSelected.style.fontSize = '38px';

  const randomNumber = (randomNumberSelected.innerHTML = randomizeNumbers(
    1,
    99
  ));

  numbersObtainedRandomly.push(randomNumber);

  if (numbersObtainedRandomly.length === 80) {
    alert('¡Oooh, tu oponente gritó: BINGO! ANTES QUE TU! HAS PERDIDO');
    window.location.reload();
  }

  const tdBingoClass = document.querySelectorAll('.td_bingo');

  tdBingoClass.forEach((td) => {
    const tdInnerHTML = parseInt(td.innerHTML);
    if (randomNumber === tdInnerHTML) {
      td.classList.add('td_bingo_painted');
    }
  });
}

export default printRandomNumber;
