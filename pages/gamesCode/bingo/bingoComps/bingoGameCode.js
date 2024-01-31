import toggleNavs from '../../../../public/navbar/toggleNavs';
import bingoStructure from './bingoDisplayStructure/bingoStructure';
import printRandomNumber from './functionalities/printRandomNumber/printRandomNumber';

const bingoGameCode = () => {
  toggleNavs();
  bingoStructure();
};

export default bingoGameCode;
