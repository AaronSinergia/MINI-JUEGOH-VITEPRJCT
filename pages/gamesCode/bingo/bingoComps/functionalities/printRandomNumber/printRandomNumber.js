import { randomizeNumbers } from '../../../../../../functions/randomizeNumbers';

let numbersObtainedRandomly = [];

function printRandomNumber(intervalSet) {
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

  const tdPainted = document.querySelectorAll('.td_bingo_painted');

  // cuidado al mover esta parte de código que dejan de funcionar los dos ifs
  if (tdPainted.length === 20) {
    console.log('has ganado');
  }
  if (tdPainted.length <= 19 && numbersObtainedRandomly.length == 70) {
    alert('HAS PERDIDO');
    window.location.reload();
  }
}

export default printRandomNumber;
