const toggleNavs = () => {
  const miniNav = document.querySelector('nav');
  miniNav.classList.add('miniNav');

  miniNav.addEventListener('click', (ev) => {
    const imgClicked = ev.target;
    const navbar = document.querySelectorAll('nav > img');
    navbar.forEach((img) => {
      if (img.classList[1] === imgClicked.classList[1]) {
        img.style.border = '2px solid white';
      } else {
        img.style.border = 'none';
      }
    });
  });
};

export default toggleNavs;
