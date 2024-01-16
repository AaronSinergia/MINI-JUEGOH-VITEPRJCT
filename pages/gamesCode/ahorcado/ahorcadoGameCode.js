import './ahorcadoStyles.css';
import toggleNavs from '../../../public/navbar/toggleNavs';
import { ahorcadoArray } from './ahorcadoArray/ahorcadoArray';

const ahorcadoGameCode = () => {
  toggleNavs();

  const mainContent = document.querySelector('.main_content');
  mainContent.innerHTML = '';

  const gameDiv = document.createElement('div');
  gameDiv.className = 'div_ahorcado';

  const imgDraw = document.createElement('img');
  imgDraw.className = 'img_draw';
  imgDraw.src = './assets/0FALLOS.png';
  imgDraw.alt = 'img_draw';

  function randomizePhrase(array) {
    let wordsOfPhraseArray = [];
    const randomizer = Math.floor(Math.random() * array.length);

    let randomPhraseSelected = array[randomizer];

    const singlePhrase = document.createElement('span');
    singlePhrase.className = 'hidden_word';

    for (const word of randomPhraseSelected) {
      const oneWord = document.createElement('h2');
      oneWord.className = word + ' word';
      oneWord.innerHTML = '_';

      wordsOfPhraseArray.push(word);

      singlePhrase.appendChild(oneWord);
    }

    gameDiv.appendChild(singlePhrase);
  }

  const revealAWord = (ev) => {
    const keyPressedToUpperCase = ev.key.toUpperCase();
    console.log(keyPressedToUpperCase);

    const words = document.querySelectorAll('.word');
    [...words].forEach((oneWord) => {
      if (oneWord.className.includes(keyPressedToUpperCase)) {
        oneWord.innerHTML = keyPressedToUpperCase;
      } else {
        //   // counterForFails += 1;

        const imgDraw = document.querySelector('.img_draw');
        imgDraw.src = './assets/PIEPOSTE.png';
      }
    });

    // let counterForFails = [];
  };

  document.addEventListener('keydown', (ev) => revealAWord(ev));

  const explanation = document.createElement('h3');
  explanation.className = 'explanation';
  explanation.innerHTML = 'USA TU TECLADO PARA AVERIGUAR LA PALABRA';

  gameDiv.appendChild(imgDraw);
  randomizePhrase(ahorcadoArray);
  gameDiv.appendChild(explanation);
  mainContent.appendChild(gameDiv);
};

export default ahorcadoGameCode;
