import renderToDom from './renderToDom.js';
import {fakeRepos} from './fakedata.js';


//pin module
const renderPin = (array) => {
  let domString = "";
  for (const repo of array) {

    domString += 
    `<!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    Customize your pins
    </button>
    
    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
    <div class="modal-content">
    <div class="modal-header">
    <h5 class="modal-title" id="staticBackdropLabel">Edit pinned items</h5>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
    Select up to six public repositories or gists you'd like to show to anyone.
    </div>
    <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Filter repositories">
    <div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
    <label class="form-check-label" for="flexCheckDefault">
    Default checkbox
    </label>
    </div>
    <div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
    <label class="form-check-label" for="flexCheckChecked">
    ${repo.title}
    </label>
    </div>
    <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    <button type="button" class="btn btn-primary">Save pins</button>
    </div>
    </div>
    </div>
    </div>`;
  }
  renderToDom("#pinContainer", domString);
  
};

export default renderPin;
