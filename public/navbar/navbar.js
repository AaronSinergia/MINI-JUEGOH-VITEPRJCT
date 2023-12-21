import './navbar.css';

const navbar = () => {
  const navbar = document.createElement('nav');
  const tresEnRayaLogo = document.createElement('img');
  const ahorcadoLogo = document.createElement('img');
  const bingoLogo = document.createElement('img');

  tresEnRayaLogo.src = '../assets/tresenraya.png';
  ahorcadoLogo.src = '../assets/ahorcado.png';
  bingoLogo.src = '../assets/bingo.png';

  tresEnRayaLogo.alt = 'tres_en_btn';
  ahorcadoLogo.alt = 'ahorcado_btn';
  bingoLogo.alt = 'bingo_btn';

  tresEnRayaLogo.className = 'gameLogo treslogo';
  ahorcadoLogo.className = 'gameLogo ahorcadologo';
  bingoLogo.className = 'gameLogo bingologo';

  navbar.appendChild(tresEnRayaLogo);
  navbar.appendChild(ahorcadoLogo);
  navbar.appendChild(bingoLogo);

  return navbar;
};

export default navbar;
