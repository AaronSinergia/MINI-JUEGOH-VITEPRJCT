import './advertisments.css';

const advertismentsTwo = () => {
  const advertismentsDiv = document.createElement('div');
  advertismentsDiv.className = 'adds_div_two';
  const metallicaAd = document.createElement('img');
  metallicaAd.className = 'metallica_add';
  metallicaAd.src = '../assets/metalica.jpg';

  const rammsteinAd = document.createElement('img');
  rammsteinAd.className = 'rammstein_add';
  rammsteinAd.src = '../assets/rammstein.jpg';

  const magoAd = document.createElement('img');
  magoAd.className = 'mago_add';
  magoAd.src = '../assets/mago.jpg';

  const judasAd = document.createElement('img');
  judasAd.className = 'judas_add';
  judasAd.src = '../assets/judas.jpg';

  const raphaelAd = document.createElement('img');
  raphaelAd.className = 'raphael_add';
  raphaelAd.src = '../assets/raphael.jpg';

  const anaMenaAd = document.createElement('img');
  anaMenaAd.className = 'anamena_add';
  anaMenaAd.src = '../assets/anamena.jpg';

  const aitanaAd = document.createElement('img');
  aitanaAd.className = 'aitana_add';
  aitanaAd.src = '../assets/aitana.jpg';

  const manaAd = document.createElement('img');
  manaAd.className = 'mana_add';
  manaAd.src = '../assets/mana.jpg';

  advertismentsDiv.appendChild(judasAd);
  advertismentsDiv.appendChild(rammsteinAd);
  advertismentsDiv.appendChild(anaMenaAd);

  advertismentsDiv.appendChild(metallicaAd);
  advertismentsDiv.appendChild(manaAd);
  advertismentsDiv.appendChild(raphaelAd);
  advertismentsDiv.appendChild(magoAd);
  advertismentsDiv.appendChild(aitanaAd);

  return advertismentsDiv;
};

export default advertismentsTwo;
