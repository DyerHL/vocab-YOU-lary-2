import { showCards } from '../components/cards';
import signOut from '../helpers/auth/signOut';
import addCardForm from '../components/forms/addCardForm';
import { getCards } from '../helpers/data/cardData';

// NAVIGATION EVENTS

const navigationEvents = (userId) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // ADD A CARD
  document.querySelector('#add-entry').addEventListener('click', () => {
    addCardForm(userId);
  });

  // ALL CARDS
  document.querySelector('#all-cards').addEventListener('click', () => {
    getCards(userId).then((cardsArray) => showCards(cardsArray));
  });
};

export default navigationEvents;
