import renderToDom from "./renderToDom.js";
import {fakeRepos} from "./fakedata.js";

const repos = (array) => {
  let domString = '';
  for (const item of array) {
    domString += `
    <div class="card" style="width: 85rem;">
  <div class="card-body">
    <h5 class="card-title">${item.title}</h5>
    <span></span>
    <span class="Label Label--secondary v-align-middle ml-1 mb-1">Public</span>
    <h6 class="card-subtitle mb-2 text-muted">${item.description}</h6>
    <p class="card-text">${item.codetype}</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
    `
  }
  renderToDom('#mainContent', domString);
};
export default repos;
