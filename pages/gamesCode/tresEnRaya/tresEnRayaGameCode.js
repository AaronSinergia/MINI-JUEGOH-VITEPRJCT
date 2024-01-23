import './tresEnRayaStyles.css';
import toggleNavs from '../../../public/navbar/toggleNavs';
import tresRayaArray from './tresRayaArray/tresRayaArray';

const tresEnRayaGameCode = () => {
  toggleNavs();
  let cellIsClicked = false;

  const mainContent = document.querySelector('.main_content');
  mainContent.innerHTML = '';

  const tableDiv = document.createElement('div');
  tableDiv.className = 'div_tresenraya';

  const tableArticle = document.createElement('article');

  const gridTableGame = document.createElement('table');
  gridTableGame.className = 'tresen_table';

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
      td.className = 'tresen_td';

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
        ev.target.className = 'tresen_td ' + currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        cellIsClicked = true;
        console.log(cellIsClicked);
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

      setTimeout(() => {
        const printRandomTD = document.querySelector(
          `td[data-row="${currentCellPosition.row}"][data-column="${currentCellPosition.column}"]`
        );

        if (printRandomTD.innerHTML === '') {
          printRandomTD.innerHTML = currentPlayer;
          printRandomTD.className =
            'tresen_td ' + currentPlayer + ' randomIAposition';
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        } else {
          const allCells = document.querySelectorAll('td');
          const emptyAllCells = Array.from(allCells).filter(
            (td) => td.innerHTML === ''
          );

          if (emptyAllCells.length > 0) {
            const randomIndexAll = Math.floor(
              Math.random() * emptyAllCells.length
            );
            const randomTdAll = emptyAllCells[randomIndexAll];

            randomTdAll.innerHTML = currentPlayer;
            randomTdAll.className =
              'tresen_td ' + currentPlayer + ' randomIAposition';
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
          }
        }
        cellIsClicked = false;
      }, 300);
    };

    const whoWins = () => {
      const allCells = document.querySelectorAll('td');

      for (let i = 0; i < 3; i++) {
        const startCell = i * 3;
        const rowCells = [
          allCells[startCell],
          allCells[startCell + 1],
          allCells[startCell + 2],
        ];

        if (
          rowCells.every((cell) => cell.innerHTML === 'X') ||
          rowCells.every((cell) => cell.innerHTML === 'O')
        ) {
          alert(`${rowCells[0].innerHTML} HA GANADO!`);
          console.log(`${rowCells[0].innerHTML} HA GANADO!`);

          setTimeout(() => {
            resetGame();
          }, 1200);

          return;
        }
      }

      for (let j = 0; j < 3; j++) {
        const columnCells = [allCells[j], allCells[j + 3], allCells[j + 6]];

        if (
          columnCells.every((cell) => cell.innerHTML === 'X') ||
          columnCells.every((cell) => cell.innerHTML === 'O')
        ) {
          alert(`${columnCells[0].innerHTML} HA GANADO!`);
          console.log(`${columnCells[0].innerHTML} HA GANADO!`);

          setTimeout(() => {
            resetGame();
          }, 1200);

          return;
        }
      }

      const diagonal1 = [allCells[0], allCells[4], allCells[8]];
      const diagonal2 = [allCells[2], allCells[4], allCells[6]];

      if (
        diagonal1.every((cell) => cell.innerHTML === 'X') ||
        diagonal1.every((cell) => cell.innerHTML === 'O')
      ) {
        alert(`${diagonal1[0].innerHTML} HA GANADO!`);
        console.log(`${diagonal1[0].innerHTML} HA GANADO!`);

        setTimeout(() => {
          resetGame();
        }, 1200);

        return;
      }

      if (
        diagonal2.every((cell) => cell.innerHTML === 'X') ||
        diagonal2.every((cell) => cell.innerHTML === 'O')
      ) {
        alert(`${diagonal2[0].innerHTML} HA GANADO!`);
        console.log(`${diagonal2[0].innerHTML} HA GANADO!`);

        setTimeout(() => {
          resetGame();
        }, 1200);

        return;
      }
    };

    const resetGame = () => {
      divButtons.style.display = 'flex';
      tableArticle.style.marginTop = '0px';
      const allCells = document.querySelectorAll('td');
      allCells.forEach((cell) => {
        cell.innerHTML = '';
      });
    };

    for (let i = 0; i < tresRayaArray.length; i++) {
      const tr = document.querySelector('tr');

      for (let j = 0; j < tresRayaArray[i].length; j++) {
        const td = document.querySelector('td');
        td.setAttribute('data-row', i.toString());
        td.setAttribute('data-column', j.toString());

        td.addEventListener('click', (ev) => {
          printXorO(ev);
          if (cellIsClicked) {
            iAPlayer(ev);
          }
          whoWins();
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
