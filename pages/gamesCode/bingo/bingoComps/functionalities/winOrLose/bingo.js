const bingo = (numbersObtainedRandomly) => {
  const tdPainted = document.querySelectorAll('.td_bingo_painted');

  if (tdPainted.length === 20) {
    alert('¡¡¡BINGO!!!');
    window.location.reload();
  }
  if (tdPainted.length <= 19 && numbersObtainedRandomly.length == 80) {
    alert('¡Oooh, se acabó el tiempo!, HAS PERDIDO');
    window.location.reload();
  }

  return tdPainted;
};

export default bingo;
