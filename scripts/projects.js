import renderToDom from "./renderToDom.js";
import { projectData } from "./fakedata.js";

const renderProjectsList = (projectsArray) => {

  let domString = 
    `<div style="display: flex; flex-direction: row;align-items: center;"><i class="fa fa-search"></i><input class="form-control mr-sm-2 id="searchFeature" type="search" placeholder="Search all projects" aria-label="Search"></div>
    `;

  const projectsToRender =
    projectsArray && projectsArray.length !== 0 ? projectsArray : projectData;

  for (const project of projectsToRender) {
    domString += `<div id="addedProjects">
      <div class="list-group">
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
      </div>
  </div>`;
  }

  renderToDom("#mainContent", domString);
};

//const sortProjectsList = () => {
  //console.log(projectData);
  //const sortedProjectsData = projectData.sort((item1, item2) => {
    //if ( item1.n < item2.name ){
      //return -1;
    //}
    //if ( item1.n > item2.name ){
     // return 1;
    //}
    //return 0;
  //});
  //console.log(sortedProjectsData);
//};

// Handle create new project button click:
const handleCreateProjectButtonClick = () => {
  document
    .getElementById("newProjectSubmitButton")
    .addEventListener("click", () => {
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

      renderProjectsList(projectData);

      document.getElementById("newProjectName").value = "";
      document.getElementById("newProjectDescription").value = "";
      document.getElementById("newProjectIsPrivate").checked = false;
    });
};

// Add new project form:
const displayAddNewProjectForm = () => {
  const domString = `<div id="projectFormContainer">
  <h3>Create a new project</h3>
  <p>Coordinate,track, and update your work in one place,so projects stay transparent and on schedule</p>
    <div class="mb-3">
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
    </div>
</div>`;

  renderToDom("#formContent", domString);
  handleCreateProjectButtonClick();
  // sortProjectsList();
};

export { renderProjectsList, displayAddNewProjectForm };
