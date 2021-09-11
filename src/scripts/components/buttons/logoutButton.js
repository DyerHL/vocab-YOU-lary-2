import firebase from 'firebase/app';
import 'firebase/auth';
import clearDom from '../../helpers/clearDom';

const signMeOut = () => {
  firebase.auth().signOut();
  document.querySelector('#nav').innerHTML = '';
  document.querySelector('#filterContainer').innerHTML = '';
  clearDom();
};

const logoutButton = () => {
  const domString = '<button id="google-auth" class="btn btn-danger">SIGNOUT</button>';
  document.querySelector('#logout-button').innerHTML = (domString);
  document.querySelector('#google-auth').addEventListener('click', signMeOut);
};

export default logoutButton;
