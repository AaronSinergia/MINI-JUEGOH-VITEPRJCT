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
  startsXButton.className = 'X';

  const startsOButton = document.createElement('button');
  startsOButton.innerText = 'Play O';
  startsOButton.className = 'O';

  for (let i = 0; i < tresRayaArray.length; i++) {
    const tr = document.createElement('tr');

    for (let j = 0; j < tresRayaArray[i].length; j++) {
      const td = document.createElement('td');

      tr.appendChild(td);
    }
    gridTableGame.appendChild(tr);
  }

  const startTheGame = (ev) => {
    divButtons.style.display = 'none';
    tableArticle.style.marginTop = '80px';
    let currentPlayer = 'X';

    if (ev.target.className === 'X') {
      currentPlayer = 'X';
    } else if (ev.target.className === 'O') {
      currentPlayer = 'O';
    }

    const printXorO = (ev) => {
      if (ev.target.innerHTML === '') {
        ev.target.innerHTML = currentPlayer;
        ev.target.className = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      }
    };

    const iAPlayer = (ev) => {
      const currentCellPosition = {
        row: ev.target.parentNode.rowIndex,
        column: ev.target.cellIndex,
      };

      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      currentCellPosition.row = getRandomInt(0, 2);
      currentCellPosition.column = getRandomInt(0, 2);

      console.log(currentCellPosition);
      // console.log(randomRow);
      // console.log(randomColumn);

      setTimeout(() => {
        const printRandomTD = document.querySelector(
          `td[data-row="${currentCellPosition.row}"][data-column="${currentCellPosition.column}"]`
        );

        if (printRandomTD && printRandomTD.innerHTML === '') {
          printRandomTD.innerHTML = currentPlayer;
          printRandomTD.className = currentPlayer + ' randomIAposition';
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
      }, 300);
    };

    for (let i = 0; i < tresRayaArray.length; i++) {
      const tr = document.querySelector('tr');

      for (let j = 0; j < tresRayaArray[i].length; j++) {
        const td = document.querySelector('td');
        td.setAttribute('data-row', i.toString());
        td.setAttribute('data-column', j.toString());

        td.addEventListener('click', (ev) => {
          printXorO(ev);
          iAPlayer(ev);
        });

        tr.appendChild(td);
      }
      gridTableGame.appendChild(tr);
    }
  };

  startsXButton.addEventListener('click', (ev) => startTheGame(ev));
  startsOButton.addEventListener('click', (ev) => startTheGame(ev));

  divButtons.appendChild(startsXButton);
  divButtons.appendChild(startsOButton);
  tableDiv.appendChild(divButtons);
  tableArticle.appendChild(gridTableGame);
  tableDiv.appendChild(tableArticle);
  mainContent.appendChild(tableDiv);
};

export default tresEnRayaGameCode;
