import restartAndResumeGame from '../restardAndResumeButtons/restartAndResumeGame';

const stopTheGame = (intervalSet, numbersObtainedRandomly) => {
  const stopButton = document.createElement('button');
  stopButton.className = 'stop_btn';
  stopButton.innerText = 'PARAR';

  stopButton.addEventListener('click', () =>
    restartAndResumeGame(intervalSet, numbersObtainedRandomly)
  );

  return stopButton;
};

export default stopTheGame;
