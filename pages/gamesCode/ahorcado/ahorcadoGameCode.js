import './ahorcadoStyles.css';
import toggleNavs from '../../../public/navbar/toggleNavs';
import { ahorcadoArray } from './ahorcadoArray/ahorcadoArray';

let failedWord = 0;

const ahorcadoGameCode = () => {
  toggleNavs();
  let underscoreArray = [];

  const mainContent = document.querySelector('.main_content');
  mainContent.innerHTML = '';

  const gameDiv = document.createElement('div');
  gameDiv.className = 'div_ahorcado';

  const imgDraw = document.createElement('img');
  imgDraw.className = 'img_draw';
  imgDraw.src = './assets/0FALLOS.png';
  imgDraw.alt = 'img_draw';

  function randomizePhrase(array) {
    const randomizer = Math.floor(Math.random() * array.length);

    let randomPhraseSelected = array[randomizer];

    const singlePhrase = document.createElement('span');
    singlePhrase.className = 'hidden_word';
    singlePhrase.id = randomPhraseSelected;

    for (const word of randomPhraseSelected) {
      const oneWord = document.createElement('h2');
      oneWord.className = word + ' word';
      oneWord.innerHTML = '_';

      singlePhrase.appendChild(oneWord);
    }

    gameDiv.appendChild(singlePhrase);
  }

  function revealAWord(ev) {
    const keyPressedToUpperCase = ev.key.toUpperCase();

    const words = document.querySelectorAll('.word');

    const wordCoincidence = [...words].filter((word) =>
      word.classList.contains(keyPressedToUpperCase)
    );

    if (wordCoincidence.length > 0) {
      wordCoincidence.forEach((word) => {
        word.innerHTML = keyPressedToUpperCase;
      });
    } else {
      failedWord++;
      const imgDraw = document.querySelector('.img_draw');
      imgDraw.src = `./assets/${failedWord}.png`;
      if (failedWord > 8) {
        alert('Has perdido...');
        failedWord = 0;
        imgDraw.src = `./assets/0FALLOS.png`;
        window.location.reload();
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
      }, 2000);
    }
  }

  document.addEventListener('keydown', (ev) => revealAWord(ev));

  const explanation = document.createElement('h3');
  explanation.className = 'explanation';
  explanation.innerHTML = 'USA TU TECLADO PARA AVERIGUAR LA PALABRA';

  const advertisment = document.createElement('h3');
  advertisment.className = 'advertisment';
  advertisment.innerHTML = 'Si fallas más de 8 veces, PERDERÁS';

  function advertismentEvent() {
    advertisment.style.display = 'flex';
    explanation.appendChild(advertisment);
  }
  explanation.addEventListener('mouseover', () => advertismentEvent());

  function advertismentEventEnds() {
    advertisment.style.display = 'none';
    explanation.appendChild(advertisment);
  }
  explanation.addEventListener('mouseout', () => advertismentEventEnds());

  gameDiv.appendChild(imgDraw);
  randomizePhrase(ahorcadoArray);
  gameDiv.appendChild(explanation);

  mainContent.appendChild(gameDiv);
};

export default ahorcadoGameCode;
