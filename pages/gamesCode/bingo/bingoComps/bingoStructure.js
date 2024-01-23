import { randomBingoCard } from '../../../../functions/randomBingoCard';
import bingoArray from '../bingoArray/bingoArray';
import randomNumberTD from './functionalities/randomNumber/randomNumberTD';
import startGameButton from './functionalities/startGame/startGameButton';

const bingoStructure = () => {
  const mainContent = document.querySelector('.main_content');
  mainContent.innerHTML = '';

  const tableDiv = document.createElement('div');
  tableDiv.className = 'div_bingo';

  const tableSection = document.createElement('section');

  const sectionBackgroundIMG = document.createElement('img');
  sectionBackgroundIMG.className = 'background_img';
  sectionBackgroundIMG.src = './assets/bingo_empty.png';
  sectionBackgroundIMG.alt = 'background_img';

  const gridTableGame = document.createElement('table');
  gridTableGame.className = 'grid_bingo';

  for (let i = 0; i < bingoArray.length; i++) {
    const tr = document.createElement('tr');

    for (let j = 0; j < bingoArray[i].length; j++) {
      const td = document.createElement('td');
      td.className = 'td_bingo';
      td.innerHTML = randomBingoCard(1, 99);

      tr.appendChild(td);
    }
    gridTableGame.appendChild(tr);
  }

  const startButton = startGameButton();
  const randomNumber = randomNumberTD();

  tableDiv.appendChild(startButton);
  tableSection.appendChild(sectionBackgroundIMG);
  tableSection.appendChild(gridTableGame);
  tableSection.appendChild(randomNumber);
  tableDiv.appendChild(tableSection);
  mainContent.appendChild(tableDiv);
};

export default bingoStructure;
