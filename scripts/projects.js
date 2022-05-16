import renderToDom from "./renderToDom.js";
import {projectData } from "./fakedata.js";


const renderProjectsList = () => {
  let domString = "";
  for (const project of projectData) {
    domString +=
      `<div class="list-group">
        <a href="#" class="list-group-item list-group-item-action">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">
              ${project.name}
            </h5>
            <small class="text-muted">
              ${project.updateTime}
            </small>
          </div>
          <p class="mb-1">
            ${project.description}
          </p>
          <small class="text-muted">
            ${project.private ? "private" : "public"}
          </small>
        </a>
      </div>`;
    }

  renderToDom("#mainContent", domString);
};


// Handle create new project button click:
const handleCreateProjectButtonClick = () => {
  document.getElementById("newProjectSubmitButton").addEventListener("click", () => {
  
  const id = Math.floor(Math.random() * 10);
  const updateTime = `${new Date().getMinutes()} minutes ago`;

  const newProject = {
    id,
    name: document.getElementById("newProjectName").value,
    updateTime,
    description: document.getElementById("newProjectDescription").value,
    private: document.getElementById("newProjectIsPrivate").checked,
  };

  projectData.push(newProject);

  renderProjectsList();
  
  document.getElementById("newProjectName").value = "";
  document.getElementById("newProjectDescription").value = ""
  document.getElementById("newProjectIsPrivate").checked = false;
  });
}

// Add new project form:
const displayAddNewProjectForm = () => {
  const domString =
    `<div class="mb-3">
      <label for="newProjectName" class="form-label">
        Project name
      </label>
      <input type="email" class="form-control" id="newProjectName" />
    </div>
    <div class="mb-3">
      <label for="newProjectDescription" class="form-label">
        Description(optional)
      </label>
      <textarea class="form-control" id="newProjectDescription" rows="3"></textarea>
    </div>
    <div class="mb-3">
      <input class="form-check-input" type="checkbox" value="" id="newProjectIsPrivate">
      <label class="form-check-label" for="newProjectIsPrivate">
        Is private?
      </label>
    </div>
    <div class="col-12">
      <button type="submit" class="btn btn-primary" id="newProjectSubmitButton">
        Create Project
      </button>
    </div>`;

  renderToDom("#formContent", domString);
  handleCreateProjectButtonClick();

};

export { renderProjectsList, displayAddNewProjectForm };
