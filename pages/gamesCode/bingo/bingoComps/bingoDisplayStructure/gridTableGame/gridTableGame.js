import { randomBingoCard } from '../../../../../../functions/randomBingoCard';
import bingoArray from '../../../bingoArray/bingoArray';

import './gridTableGame.css';

const gridTableGame = () => {
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

  return gridTableGame;
};

export default gridTableGame;
