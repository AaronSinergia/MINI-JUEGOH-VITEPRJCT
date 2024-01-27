import bingoGameCode from '../../../pages/gamesCode/bingo/bingoComps/bingoGameCode';

const bingoIMG = () => {
  const bingoLogo = document.createElement('img');
  bingoLogo.src = '../assets/bingo.png';
  bingoLogo.alt = 'bingo_btn';
  bingoLogo.className = 'gameLogo bingologo';

  bingoLogo.addEventListener('click', () => {
    bingoGameCode();
  });

  return bingoLogo;
};

export default bingoIMG;
