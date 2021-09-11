const filterButtons = () => {
  document.querySelector('#filterContainer').innerHTML = `
    <button type="button" id="filter--HTML" class="btn btn-secondary">HTML</button>
    <button type="button" id="filter--CSS"class="btn btn-secondary">CSS</button>
    <button type="button" id="filter--JavaScript"class="btn btn-secondary">JavaScript</button>
    <button type="button" id="filter--Tech"class="btn btn-secondary">Technology</button>
    `;
};

export default filterButtons;
