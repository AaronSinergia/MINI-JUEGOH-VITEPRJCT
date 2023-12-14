import './mainLogo.css';

const mainLogo = () => {
  const imgLogo = document.createElement('img');
  imgLogo.className = 'main_logo';
  imgLogo.alt = 'main_logo';
  imgLogo.src = '../../assets/images.png';

  return imgLogo;
};

export default mainLogo;
