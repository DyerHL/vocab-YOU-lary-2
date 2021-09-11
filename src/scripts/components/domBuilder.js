const domBuilder = () => {
  document.querySelector('#app').innerHTML = ` 
    <div id="nav"></div>
    <div id="main-container">
        <div id="form-container"></div>
        <div id="view"></div>
    </div>`;
};

export default domBuilder;
