import renderToDom from "./renderToDom.js";
import { projectData } from "./fakedata.js";


const renderProjectsList = () => {
  let domString = "";
  for (const project of projectData) {
    domString+= `<div class="list-group">
    <a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">"${project.name}"</h5>
      <small class="text-muted">"${project.updateTime}"</small>
    </div>
    <p class="mb-1">"${project.description}"</p>
    <small class="text-muted">"${
      project.private ? "private" : "public"
    }"</small>
  </a>
  </div>`;
  }
  

  renderToDom("#mainContent", domString);
};

// //function is not added to main.js
const addProject = (event) => {
  event.preventDefault();

  const newProject = {
    id: document.querySelector().value,
    name: document.querySelector().value,
    updateTime: document.querySelector().value,
    description: document.querySelector().value,
    private: document.querySelector().value,
  };

  projectData.push(newProject);
 renderProjectsList();
};


 const projectForm = () => {
   let domString = "";
   domString = `<div class="mb-3">
   <label for="exampleFormControlInput1" class="form-label">Project Board name</label>
   <input type="email" class="form-control" id="exampleFormControlInput1">
 </div>
 <div class="mb-3">
   <label for="exampleFormControlTextarea1" class="form-label">Description(optional)</label>
   <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
 </div>
 <div class="col-12">
   <button type="submit" class="btn btn-primary" id="createProjectbtn">Create Project</button>
 </div>
 </div>`;

   renderToDom("#formContent", domString);
 };

export { renderProjectsList };