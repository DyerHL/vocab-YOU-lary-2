import clearDom from '../../helpers/clearDom';

const addCardForm = (userId, obj = {}) => {
  clearDom();
  document.querySelector('#form-container').innerHTML = `
        <form id="submit-card-form" class="mb-4">
          <div class="form-group">
            <label for="first-name">Title</label>
            <input type="text" class="form-control" id="title" aria-describedby="title" placeholder="Title" value="${obj.title || ''}"required>
          </div>
          <div class="form-group">
            <label for="last-name">Description</label>
            <input type="url" class="form-control" id="description" placeholder="Description" value="${obj.description || ''}"required>
          </div>
          <div class="form-group">
            <label for="email">Language/Tech</label>
            <input type="text" class="form-control" id="language_tech" placeholder="Language/Tech" value="${obj.language_tech || ''}"required>
          </div>
          <button type="submit" id="${obj.firebaseKey ? `update-card--${obj.firebaseKey}` : 'submit-card'}" class="btn btn-primary">Submit Card</button>
        </form>`;
};

export default addCardForm;
