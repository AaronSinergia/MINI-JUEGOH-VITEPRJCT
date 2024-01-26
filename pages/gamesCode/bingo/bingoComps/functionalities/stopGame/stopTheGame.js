import restartAndResumeButtons from '../restardAndResumeButtons/restartAndResumeButtons';

const stopTheGame = (intervalSet) => {
  const stopButton = document.createElement('button');
  stopButton.className = 'stop_btn';
  stopButton.innerText = 'PARAR';

  stopButton.addEventListener('click', () =>
    restartAndResumeButtons(intervalSet)
  );

  return stopButton;
};

export default stopTheGame;
