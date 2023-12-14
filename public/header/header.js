import './header.css';
import mainLogo from './mainLogo/mainLogo';

const header = () => {
  const header = document.createElement('header');
  header.className = 'header';
  const h1 = document.createElement('h1');
  h1.className = 'h1';
  h1.innerText = 'MINI-JUEGOH';
  const logo = mainLogo();

  header.appendChild(logo);
  header.appendChild(h1);

  return header;
};

export default header;
