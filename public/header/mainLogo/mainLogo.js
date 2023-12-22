import './mainLogo.css';
import mainLogoEventListener from './mainLogoEventListener';

const mainLogo = () => {
  const imgLogo = document.createElement('img');
  imgLogo.className = 'main_logo';
  imgLogo.alt = 'main_logo';
  imgLogo.src = '../../assets/images.png';

  imgLogo.addEventListener('click', () => mainLogoEventListener());

  return imgLogo;
};

export default mainLogo;
