import { fakeRepos } from "./fakedata.js";
import renderToDom from "./renderToDom.js";

const renderRepoForm = () => {
  let domString =
  `<h1>Create a new Repository</h1>
  <form id="form">
    <div class="input-group mb-3">
    <span class="input-group-text" id="title">Title</span>
   <input type="text" class="form-control" aria-label="title" aria-describedby="inputGroup-sizing-default">
   </div>
   <div class="input-group mb-3">
   <span class="input-group-text" id="description">Description</span>
   <input type="text" class="form-control" aria-label="description" aria-describedby="inputGroup-sizing-default">
   </div>
   </div>
   <div class="input-group mb-3">
   <span class="input-group-text" id="codetype">Code type</span>
   <input type="text" class="form-control" aria-label="codetype" aria-describedby="inputGroup-sizing-default">
   </div>
   <button type="submit" class="btn btn-primary">Create Repo</button>
  </form>`;

  renderToDom ("#formContent", domString);
}
export default renderRepoForm;
