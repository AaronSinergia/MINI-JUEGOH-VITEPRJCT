import './ahorcadoStyles.css';
import toggleNavs from '../../../public/navbar/toggleNavs';
import { ahorcadoArray } from './ahorcadoArray/ahorcadoArray';
import randomizePhrase from '../../../functions/ahorcadoFunctions/randomizePhrase';
import revealAWord from '../../../functions/ahorcadoFunctions/revealAWord';
import rulesGame from './ahoracadoComps/rulesGame/rulesGame';

const ahorcadoGameCode = () => {
  toggleNavs();

  const mainContent = document.querySelector('.main_content');
  mainContent.innerHTML = '';
  mainContent.style.display = 'flex';

  const gameDiv = document.createElement('div');
  gameDiv.className = 'div_ahorcado';

  const imgDraw = document.createElement('img');
  imgDraw.className = 'img_draw';
  imgDraw.src = './assets/0FALLOS.png';
  imgDraw.alt = 'img_draw';

  const randomPhrase = randomizePhrase(ahorcadoArray);

  document.addEventListener('keydown', (ev) => revealAWord(ev));

  const explanation = rulesGame();

  gameDiv.appendChild(imgDraw);
  gameDiv.appendChild(randomPhrase);
  gameDiv.appendChild(explanation);
  mainContent.appendChild(gameDiv);
};

export default ahorcadoGameCode;
