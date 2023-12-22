const ahorcadoIMG = () => {
  const ahorcadoLogo = document.createElement('img');
  ahorcadoLogo.src = '../assets/ahorcado.png';
  ahorcadoLogo.alt = 'ahorcado_btn';
  ahorcadoLogo.className = 'gameLogo ahorcadologo';

  return ahorcadoLogo;
};

export default ahorcadoIMG;
