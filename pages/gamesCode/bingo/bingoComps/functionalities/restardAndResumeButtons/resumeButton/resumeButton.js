import './resumeButton.css';

const resumeButton = () => {
  const resumeBttn = document.createElement('button');
  resumeBttn.innerText = 'REANUDAR/PARAR';
  resumeBttn.className = 'resume_btn';

  return resumeBttn;
};
export default resumeButton;
