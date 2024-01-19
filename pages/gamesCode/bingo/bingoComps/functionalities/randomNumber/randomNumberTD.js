const randomNumberTD = () => {
  const randomNumberSelected = document.createElement('td');
  randomNumberSelected.className = 'number_selected_random';
  randomNumberSelected.innerHTML = '¿Start?';
  randomNumberSelected.style.fontSize = '15px';
  randomNumberSelected.style.display = 'flex';

  return randomNumberSelected;
};

export default randomNumberTD;
