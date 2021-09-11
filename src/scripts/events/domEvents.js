import addCardForm from '../components/forms/addCardForm';
import { showCards } from '../components/cards';
import {
  deleteCard,
  createCard,
  getSingleCard,
  updateCard,
  filterCards
} from '../helpers/data/cardData';

const domEvents = (userId) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR DELETING A CARD
    if (e.target.id.includes('delete-card')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteCard(firebaseKey, userId).then(showCards);
      }
    }

    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING A CARD
    if (e.target.id.includes('submit-card')) {
      e.preventDefault();
      const cardObj = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        language_tech: document.querySelector('#language_tech').value,
        time: new Date(),
        uid: userId
      };

      createCard(cardObj).then((cardsArray) => showCards(cardsArray));
    }

    // CLICK EVENT FOR EDITING/UPDATING A CARD
    if (e.target.id.includes('edit-card')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleCard(firebaseKey).then((cardObj) => addCardForm(userId, cardObj));
    }

    // CLICK EVENT FOR EDITING A CARD
    if (e.target.id.includes('update-card')) {
      e.preventDefault();
      const [, firebaseKey] = e.target.id.split('--');
      const cardObj = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        language_tech: document.querySelector('#language_tech').value,
        time: new Date(),
        firebaseKey,
        uid: userId
      };
      updateCard(cardObj).then(showCards);
    }

    // CLICK EVENT FOR FILTERING
    if (e.target.id.includes('filter')) {
      const [, langTech] = e.target.id.split('--');
      filterCards(langTech, userId).then(showCards);
    }
  });
};

export default domEvents;
