import bingo from './bingo';

const paintedLine = (numbersObtainedRandomly) => {
  const allCells = document.querySelectorAll('.td_bingo');
  const tdPainted = document.querySelectorAll('.td_bingo_painted');

  const rows = [
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
  ];

  const allHavePaintedClass = rows.some((row) =>
    row.every((cellIndex) =>
      allCells[cellIndex].classList.contains('td_bingo_painted')
    )
  );

  if (allHavePaintedClass) {
    bingo(numbersObtainedRandomly);
    return alert('¡Línea! Seguimos para Bingo...');
  } else {
    if (tdPainted.length <= 19 && numbersObtainedRandomly.length == 80) {
      alert('¡Oooh, se acabó el tiempo!, HAS PERDIDO');
      window.location.reload();
    }
  }
};

export default paintedLine;
