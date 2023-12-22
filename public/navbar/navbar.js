import ahorcadoIMG from './navGamesIMG/ahorcadoIMG';
import bingoIMG from './navGamesIMG/bingoIMG';
import tresEnRayaIMG from './navGamesIMG/tresEnRayaIMG';
import './navbar.css';

const navbar = () => {
  const navbar = document.createElement('nav');

  const tresEnRayaLogo = tresEnRayaIMG();
  const ahorcadoLogo = ahorcadoIMG();
  const bingoLogo = bingoIMG();

  navbar.appendChild(tresEnRayaLogo);
  navbar.appendChild(ahorcadoLogo);
  navbar.appendChild(bingoLogo);

  return navbar;
};

export default navbar;
