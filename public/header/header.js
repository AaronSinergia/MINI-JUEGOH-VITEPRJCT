import './header.css';
import mainLogo from './mainLogo/mainLogo';

const header = () => {
  const header = document.createElement('header');
  header.className = 'header';
  const h2 = document.createElement('h2');
  h2.innerText = 'MINI-JUEGOH';
  const logo = mainLogo();

  header.appendChild(logo);
  header.appendChild(h2);

  return header;
};

export default header;
