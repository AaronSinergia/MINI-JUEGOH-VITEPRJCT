import footer from './public/footer/footer';
import header from './public/header/header';
import './style.css';

const mainBodyApp = () => {
  const appID = document.querySelector('#app');
  const mainFooter = footer();
  const mainHeader = header();

  appID.appendChild(mainHeader);
  appID.appendChild(mainFooter);
};

mainBodyApp();
