import clearDom from '../helpers/clearDom';

const showCards = (array) => {
  clearDom();
  array.forEach((item) => {
    document.querySelector('#view').innerHTML += `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <h5 class="card-language_tech">Category: ${item.language_tech}</h5>
            <h6 class="card-subtitle mb-2 text-muted" id="description">${item.description}</h6>
        <hr>
        <button type="button" class="btn btn-info" id="edit-card--${item.firebaseKey}">Edit</button>
        <button type="button" class="btn btn-danger" id="delete-card--${item.firebaseKey}">Delete</button>
        <hr>
        </div>
      </div>
      `;
  });
};

const emptyCards = () => {
  document.querySelector('#view').innerHTML = '<h1>No Cards</h1>';
};

export { showCards, emptyCards };
