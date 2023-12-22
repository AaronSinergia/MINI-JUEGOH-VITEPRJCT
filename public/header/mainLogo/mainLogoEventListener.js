import ahorcadoIMG from '../../navbar/navGamesIMG/ahorcadoIMG';
import bingoIMG from '../../navbar/navGamesIMG/bingoIMG';
import tresEnRayaIMG from '../../navbar/navGamesIMG/tresEnRayaIMG';

const mainLogoEventListener = () => {
  const navbar = document.querySelector('nav');

  const tresEnRayaLogo = tresEnRayaIMG();
  const ahorcadoLogo = ahorcadoIMG();
  const bingoLogo = bingoIMG();

  navbar.appendChild(tresEnRayaLogo);
  navbar.appendChild(ahorcadoLogo);
  navbar.appendChild(bingoLogo);

  return navbar;
};

export default mainLogoEventListener;
