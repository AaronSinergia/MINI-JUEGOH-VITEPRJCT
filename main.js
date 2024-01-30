import './style.css';
import footer from './public/footer/footer';
import header from './public/header/header';
import navbar from './public/navbar/navbar';
import advertisments from './public/advertisments/advertisments';
import advertismentsTwo from './public/advertisments/advertismentsTwo';

const mainBodyApp = () => {
  const appID = document.querySelector('#app');
  const mainHeader = header();
  const mainNav = navbar();
  const mainContent = document.createElement('div');
  mainContent.className = 'main_content';
  mainContent.style.display = 'none';

  const adds = advertisments();
  const addsTwo = advertismentsTwo();
  const mainFooter = footer();

  appID.appendChild(mainHeader);
  appID.appendChild(mainNav);
  appID.appendChild(adds);
  appID.appendChild(mainContent);
  appID.appendChild(addsTwo);
  appID.appendChild(mainFooter);
};

mainBodyApp();
