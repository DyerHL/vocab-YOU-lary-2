const clearDom = () => {
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#login-form-container').innerHTML = '';
  document.querySelector('#view').innerHTML = '';
};

export default clearDom;
