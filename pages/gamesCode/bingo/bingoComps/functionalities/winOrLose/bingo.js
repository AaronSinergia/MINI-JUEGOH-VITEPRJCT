const bingo = (numbersObtainedRandomly) => {
  const tableSection = document.querySelector('section');

  const lineButton = document.querySelector('.linea_button');
  lineButton.style.display = 'none';

  const buttonBingo = document.createElement('button');
  buttonBingo.innerHTML = '¡¡BINGO!!';
  buttonBingo.className = 'bingo_button';
  buttonBingo.style.display = 'flex';

  function isBingo() {
    const tdPainted = document.querySelectorAll('.td_bingo_painted');
    if (tdPainted.length === 20) {
      alert('¡¡¡BINGO, HAS GANADO!!!');
      window.location.reload();
    }
    if (tdPainted.length <= 19 && numbersObtainedRandomly.length === 80) {
      alert('¡Oooh, tu oponente gritó: BINGO! ANTES QUE TU! HAS PERDIDO');
      window.location.reload();
    }
  }

  buttonBingo.addEventListener('click', () => isBingo());

  tableSection.appendChild(buttonBingo);

  return tableSection;
};

export default bingo;
