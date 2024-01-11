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
      // 1 - RECOJO EL VALOR QUE HE CLICADO 'EV.TARGET' (HECHO)
      console.log(ev.target);
      // 2 - QUIERO QUE ME PINTE ALEATORIAMENTE UN VALOR CONTRARIO AL PINTADO
      //  OBTENER COMO SELECCIONAR FILAS Y COLUMNAS  (HECHO)
      const currentCellPosition = {
        row: ev.target.parentNode.rowIndex,
        column: ev.target.cellIndex,
      };

      // console.log(currentCellPosition.row && currentCellPosition.column - 1);

      // 2.1 - COMPARAR EL VALOR Y ASIGNARLE EL CONTRARIO
      //  2.2 - PINTARLO ALEATORIAMENTE EN UN HUECO VACIO
      //  2.3 - VOLVER A COMPARAR ASIGNAR CONTRARIO Y PINTAR
      //  2.4 - VERIFICAR CUANDO SE CUMPLA EL 3 EN RAYA Y SOLTAR UN ALERT INDICANDO QUIEN HA GANADO SI LA MAQUINA O TU
    };

    for (let i = 0; i < tresRayaArray.length; i++) {
      const tr = document.querySelector('tr');

      for (let j = 0; j < tresRayaArray[i].length; j++) {
        const td = document.querySelector('td');
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
