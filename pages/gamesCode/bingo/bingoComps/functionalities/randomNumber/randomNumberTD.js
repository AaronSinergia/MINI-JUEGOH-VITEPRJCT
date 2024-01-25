const randomNumberTD = () => {
  const randomNumberSelected = document.createElement('td');
  randomNumberSelected.className = 'number_selected_random';
  randomNumberSelected.innerHTML = '¿Empezar?';
  randomNumberSelected.style.fontSize = '13px';
  randomNumberSelected.style.display = 'flex';

  return randomNumberSelected;
};

export default randomNumberTD;
