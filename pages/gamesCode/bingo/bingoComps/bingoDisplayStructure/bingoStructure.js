import randomNumberTD from '../functionalities/randomNumber/randomNumberTD';
import startGameButton from '../functionalities/startGameButton/startGameButton';
import paintedLine from '../functionalities/winOrLose/paintedLine';
import gridTableGame from './gridTableGame/gridTableGame';

import './bingoStructure.css';

let numbersObtainedRandomly = [];
const bingoStructure = () => {
  const mainContent = document.querySelector('.main_content');
  mainContent.innerHTML = '';
  mainContent.style.display = 'flex';

  const tableDiv = document.createElement('div');
  tableDiv.className = 'div_bingo';

  const tableSection = document.createElement('section');

  const sectionBackgroundIMG = document.createElement('img');
  sectionBackgroundIMG.className = 'background_img';
  sectionBackgroundIMG.src = './assets/bingo_empty.png';
  sectionBackgroundIMG.alt = 'background_img';

  const gridTable = gridTableGame();
  const startButton = startGameButton(numbersObtainedRandomly);
  const randomNumber = randomNumberTD();
  const isLineButton = paintedLine(numbersObtainedRandomly);

  tableDiv.appendChild(startButton);
  tableSection.appendChild(sectionBackgroundIMG);
  tableSection.appendChild(gridTable);
  tableSection.appendChild(isLineButton);
  tableSection.appendChild(randomNumber);
  tableDiv.appendChild(tableSection);
  mainContent.appendChild(tableDiv);
};

export default bingoStructure;
