import { showCards } from '../components/cards';
import domBuilder from '../components/domBuilder';
import filterButtons from '../components/filter';
import navBar from '../components/navBar';
import domEvents from '../events/domEvents';
import navigationEvents from '../events/navEvents';
import { getCards } from '../helpers/data/cardData';

const startApp = (user) => {
  domBuilder();
  domEvents(user.uid);
  navBar();
  navigationEvents(user.uid);
  filterButtons();
  getCards(user.uid).then((cards) => showCards(cards));
};

export default startApp;
