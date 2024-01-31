let failedWord = 0;
const revealAWord = (ev) => {
  const keyPressedToUpperCase = ev.key.toUpperCase();

  const words = document.querySelectorAll('.word');

  const imgDraw = document.querySelector('.img_draw');

  const wordCoincidence = [...words].filter((word) =>
    word.classList.contains(keyPressedToUpperCase)
  );

  if (wordCoincidence.length > 0) {
    wordCoincidence.forEach((word) => {
      word.innerHTML = keyPressedToUpperCase;
    });
  } else {
    failedWord++;

    imgDraw.src = `./assets/${failedWord}.png`;
    if (failedWord > 8) {
      alert('Has perdido...');
      failedWord = 0;
      imgDraw.src = `./assets/0FALLOS.png`;
      setTimeout(() => {
        window.location.reload();
      }, 100);
    }
  }

  const allWordsGuessed = [...words].every((word) => word.innerHTML !== '_');

  if (allWordsGuessed) {
    alert('¡LA HAS ADIVINADO! ¡FELICIDADES!');
    const spanSelectedByID = document.querySelector('.hidden_word').id;
    console.log(spanSelectedByID);
    imgDraw.src = `./assets/${spanSelectedByID}.jpg`;
    setTimeout(() => {
      window.location.reload();
    }, 600);
  }
};

export default revealAWord;
