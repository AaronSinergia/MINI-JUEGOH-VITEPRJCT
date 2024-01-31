import './tresEnRayaStyles.css';
import toggleNavs from '../../../public/navbar/toggleNavs';
import tresRayaArray from './tresRayaArray/tresRayaArray';
import startX from './tresEnRayaComps/startGameComps/startGameButtons/startX';
import startO from './tresEnRayaComps/startGameComps/startGameButtons/startO';

const tresEnRayaGameCode = () => {
  toggleNavs();

  const mainContent = document.querySelector('.main_content');
  mainContent.innerHTML = '';
  mainContent.style.display = 'flex';

  const tableDiv = document.createElement('div');
  tableDiv.className = 'div_tresenraya';

  const tableArticle = document.createElement('article');

  const gridTableGame = document.createElement('table');
  gridTableGame.className = 'tresen_table';

  const divButtons = document.createElement('div');
  divButtons.className = 'div_buttons';

  for (let i = 0; i < tresRayaArray.length; i++) {
    const tr = document.createElement('tr');

    for (let j = 0; j < tresRayaArray[i].length; j++) {
      const td = document.createElement('td');
      td.className = 'tresen_td';

      tr.appendChild(td);
    }
    gridTableGame.appendChild(tr);
  }

  const startsX = startX();
  const startsO = startO();

  divButtons.appendChild(startsX);
  divButtons.appendChild(startsO);
  tableDiv.appendChild(divButtons);
  tableArticle.appendChild(gridTableGame);
  tableDiv.appendChild(tableArticle);
  mainContent.appendChild(tableDiv);
};

export default tresEnRayaGameCode;
