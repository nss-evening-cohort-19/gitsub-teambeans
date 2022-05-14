//card
const overviewDom = (array) => {
    let domString = "";
    for (const repo of array) {
      domString = `
      <div class="card">
          <div class="card-body">
               <h5 class="card-title">${repo.title}</h5>
               <p class="card-text">${repo.codtype}</p>
          </div>
      </div>
      `;
    }
    renderToDom("#overviewContainer", domString);
  };
  export default overviewDom;
