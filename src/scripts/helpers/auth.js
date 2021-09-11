import firebase from 'firebase/app';
import 'firebase/auth';
import loginButton from '../components/buttons/loginButton';
import firebaseConfig from '../../api/apiKeys';
import startApp from '../views/startApp';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      startApp(user);
    } else {
      document.querySelector('#login-form-container').innerHTML = `
      <h1>Welcome to Vocab-YOU-lary</h1>
      `;
      loginButton();
    }
  });
};

export default checkLoginStatus;
