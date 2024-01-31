const rulesGame = () => {
  const explanation = document.createElement('h3');
  explanation.className = 'explanation';
  explanation.innerHTML = 'USA TU TECLADO PARA AVERIGUAR LA PALABRA';

  const advertisment = document.createElement('h3');
  advertisment.className = 'advertisment';
  advertisment.innerHTML = 'Si fallas más de 8 veces, PERDERÁS';

  function advertismentEvent() {
    advertisment.style.display = 'flex';
    explanation.appendChild(advertisment);
  }
  explanation.addEventListener('mouseover', () => advertismentEvent());

  function advertismentEventEnds() {
    advertisment.style.display = 'none';
    explanation.appendChild(advertisment);
  }
  explanation.addEventListener('mouseout', () => advertismentEventEnds());

  return explanation;
};

export default rulesGame;
