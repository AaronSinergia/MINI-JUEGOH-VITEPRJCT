import ahorcadoGameCode from '../../../pages/gamesCode/ahorcado/ahorcadoGameCode';

const ahorcadoIMG = () => {
  const ahorcadoLogo = document.createElement('img');
  ahorcadoLogo.src = '../assets/ahorcado.png';
  ahorcadoLogo.alt = 'ahorcado_btn';
  ahorcadoLogo.className = 'gameLogo ahorcadologo';

  ahorcadoLogo.addEventListener('click', () => {
    ahorcadoGameCode();
  });

  return ahorcadoLogo;
};

export default ahorcadoIMG;
