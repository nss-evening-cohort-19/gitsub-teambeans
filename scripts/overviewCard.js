import renderToDom from "./renderToDom.js";
import fakeRepos from "./fakedata.js";



//card
const overviewDom = (array) => {
  let domString = '';
  for (const repo of array) {
    domString += `
    <div class="card" style="width: 85rem;">
  <div class="card-body">
    <h5 class="card-title">${repo.title}</h5>
    <span></span>
    <span class="Label Label--secondary v-align-middle ml-1 mb-1">Public</span>
    <h6 class="card-subtitle mb-2 text-muted">${repo.description}</h6>
    <p class="card-text">${repo.codetype}</p>
    <a href="#" class="card-link">Repository</a>
  </div>
</div>
    `
  }
  renderToDom('#overviewContainer', domString);
};

  export default overviewDom;