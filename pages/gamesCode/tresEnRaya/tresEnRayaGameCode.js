import './tresEnRayaStyles.css';
import toggleNavs from '../../../public/navbar/toggleNavs';
import tresRayaArray from './tresRayaArray.js/tresRayaArray';

const tresEnRayaGameCode = () => {
  toggleNavs();

  const mainContent = document.querySelector('.main_content');
  mainContent.innerHTML = '';

  const tableDiv = document.createElement('div');
  tableDiv.className = 'div_game';

  const tableArticle = document.createElement('article');

  const gridTableGame = document.createElement('table');

  const divButtons = document.createElement('div');
  divButtons.className = 'div_buttons';

  const startsXButton = document.createElement('button');
  startsXButton.innerText = 'Play X';
  startsXButton.className = 'button_x';

  const startsYButton = document.createElement('button');
  startsYButton.innerText = 'Play Y';
  startsYButton.className = 'button_y';

  for (let i = 0; i < tresRayaArray.length; i++) {
    const tr = document.createElement('tr');

    for (let j = 0; j < tresRayaArray[i].length; j++) {
      const td = document.createElement('td');
      td.innerHTML = tresRayaArray[i][j];

      const startTheGame = () => {
        td.innerHTML = '';
      };

      startsXButton.addEventListener('click', () => startTheGame());
      startsYButton.addEventListener('click', () => startTheGame());

      function printX() {
        console.log('X');
      }

      td.addEventListener('click', () => printX());

      if (tresRayaArray[i][j].includes('O')) {
        td.className = 'o';
      } else {
        td.className = 'x';
      }

      tr.appendChild(td);
    }
    gridTableGame.appendChild(tr);
  }

  divButtons.appendChild(startsXButton);
  divButtons.appendChild(startsYButton);
  tableDiv.appendChild(divButtons);
  tableArticle.appendChild(gridTableGame);
  tableDiv.appendChild(tableArticle);
  mainContent.appendChild(tableDiv);
};

export default tresEnRayaGameCode;
