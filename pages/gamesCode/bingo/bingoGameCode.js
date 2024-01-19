import './bingoStyles.css';
import toggleNavs from '../../../public/navbar/toggleNavs';
import bingoStructure from './bingoComps/bingoStructure';

const bingoGameCode = () => {
  toggleNavs();
  bingoStructure();
};

export default bingoGameCode;
