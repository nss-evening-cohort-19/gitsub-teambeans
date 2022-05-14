import fakeRepos from "./fakedata.js";
import renderToDom from "./renderToDom.js";

const renderRepoForm = () => {
  let domString =
  `<h1>Create a new Repository</h1>
  <form id="form">
  <div class="mb-3">
       <label for="title" class="form-label">Title</label>
        <input type="text" placeholder="Title" class="form-control" id="title" aria-describedby="title" required>
     </div>
     <div class="mb-3">
       <label for="description" class="form-label">Description</label>
        <input type="text" placeholder="description" class="form-control" id="description" aria-describedby="description" required>
     </div>
     <div class="mb-3">
       <label for="codeType" class="form-label">Codetype</label>
        <input type="text" placeholder="codetype" class="form-control" id="codetype" aria-describedby="codetype" required>
     </div>
   <button type="submit" class="btn btn-primary">Create Repo</button>
  </form>`;

  renderToDom ("#formContent", domString);
}
export default renderRepoForm;
