import tresEnRaya from '../../../pages/gamesCode/tresEnRaya';

const tresEnRayaIMG = () => {
  const tresEnRayaLogo = document.createElement('img');
  tresEnRayaLogo.src = '../assets/tresenraya.png';
  tresEnRayaLogo.alt = 'tres_en_btn';
  tresEnRayaLogo.className = 'gameLogo treslogo';

  tresEnRayaLogo.addEventListener('click', () => tresEnRaya());

  return tresEnRayaLogo;
};

export default tresEnRayaIMG;
