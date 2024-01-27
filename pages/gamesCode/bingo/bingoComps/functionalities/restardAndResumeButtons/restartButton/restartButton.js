import './restartButton.css';

const restartButton = () => {
  const restartBttn = document.createElement('button');
  restartBttn.innerText = 'REINICIAR';
  restartBttn.className = 'restart_btn';
  return restartBttn;
};

export default restartButton;
