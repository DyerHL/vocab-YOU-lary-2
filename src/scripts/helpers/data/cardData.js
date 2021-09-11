import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';
// API CALLS FOR CARDS

const dbUrl = firebaseConfig.databaseURL;

// GET CARDS
const getCards = (userId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/cards.json?orderBy="uid"&equalTo="${userId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// GET SINGLE CARD
const getSingleCard = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/cards/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

// DELETE CARD
const deleteCard = (firebaseKey, userId) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/cards/${firebaseKey}.json`)
    .then(() => {
      getCards(userId).then(resolve);
    })
    .catch(reject);
});

// CREATE CARD
const createCard = (cardObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/cards.json`, cardObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/cards/${response.data.name}.json`, body)
        .then(() => {
          getCards(cardObj.uid).then((cardsArray) => resolve(cardsArray));
        });
    }).catch((error) => reject(error));
});

// UPDATE CARD
const updateCard = (cardObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/cards/${cardObj.firebaseKey}.json`, cardObj)
    .then(() => getCards(cardObj.uid).then(resolve))
    .catch(reject);
});

// FILTER CARDS
const filterCards = (langtech, uid) => new Promise((resolve, reject) => {
  getCards(uid).then((userCards) => {
    const filtered = userCards.filter((card) => (card.language_tech === langtech));
    resolve(filtered);
  })
    .catch(reject);
});

// SEARCH CARDS
const searchCards = async (searchValue, uid) => {
  const cardsArray = await getCards(uid);
  const searchReturn = cardsArray.filter((card) => (card.title.toLowerCase().includes(searchValue)));
  return searchReturn;
};

export {
  getCards,
  getSingleCard,
  createCard,
  deleteCard,
  updateCard,
  filterCards,
  searchCards
};
