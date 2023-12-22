const bingoIMG = () => {
  const bingoLogo = document.createElement('img');
  bingoLogo.src = '../assets/bingo.png';
  bingoLogo.alt = 'bingo_btn';
  bingoLogo.className = 'gameLogo bingologo';

  return bingoLogo;
};

export default bingoIMG;
