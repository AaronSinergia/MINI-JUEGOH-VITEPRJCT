import './style.css';
import footer from './public/footer/footer';
import header from './public/header/header';
import navbar from './public/navbar/navbar';

const mainBodyApp = () => {
  const appID = document.querySelector('#app');
  const mainHeader = header();
  const mainNav = navbar();
  const mainContent = document.createElement('div');
  mainContent.className = 'main_content';

  const mainFooter = footer();

  appID.appendChild(mainHeader);
  appID.appendChild(mainNav);
  appID.appendChild(mainContent);
  appID.appendChild(mainFooter);
};

mainBodyApp();
