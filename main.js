import footer from './public/footer/footer';
import header from './public/header/header';
import navbar from './public/navbar/navbar';
import './style.css';

const mainBodyApp = () => {
  const appID = document.querySelector('#app');
  const mainFooter = footer();
  const mainHeader = header();
  const mainNav = navbar();

  appID.appendChild(mainHeader);
  appID.appendChild(mainNav);
  appID.appendChild(mainFooter);
};

mainBodyApp();
