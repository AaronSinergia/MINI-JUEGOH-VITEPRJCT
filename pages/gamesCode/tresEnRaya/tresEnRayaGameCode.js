import './tresEnRayaStyles.css';
import toggleNavs from '../../../public/navbar/toggleNavs';
import tresRayaArray from './tresRayaArray.js/tresRayaArray';

const tresEnRayaGameCode = () => {
  toggleNavs();

  const mainContent = document.querySelector('.main_content');
  mainContent.innerHTML = '';

  const tableDiv = document.createElement('div');
  tableDiv.className = 'div_game';

  const divButtons = document.createElement('div');
  divButtons.className = 'div_buttons';

  const startsXButton = document.createElement('button');
  const startsYButton = document.createElement('button');
  startsXButton.innerText = 'Play X';
  startsYButton.innerText = 'Play Y';

  const tableArticle = document.createElement('article');

  const gridTableGame = document.createElement('table');

  for (let i = 0; i < tresRayaArray.length; i++) {
    const tr = document.createElement('tr');

    for (let j = 0; j < tresRayaArray[i].length; j++) {
      const td = document.createElement('td');
      td.innerHTML = tresRayaArray[i][j];

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
