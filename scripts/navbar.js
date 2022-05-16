import renderToDom from "./renderToDom.js";
import { renderProjectsList, displayAddNewProjectForm } from "./projects.js";
import { addPack, packageCards, packageList, packEventListeners, search } from "./packages.js";

const displayNavBar = () => {
  const domString = `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#" id="overviewLink">Overview</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="repositoriesLink"> Repositories</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="projectsLink">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"  id="packagesLink">Packages</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>`;

  renderToDom("#navBar", domString);
};

const handleNavBarLinksClick = () => {
  document.getElementById("navbarNav").addEventListener("click", (event) => {
    const linkId = event.target.id;

    switch (linkId) {
      case "overviewLink":
        // ToDo: add function to show overview section
        console.log("overview link clicked");
        break;
      case "repositoriesLink":
        // ToDo: add function to show repositories section
        console.log("repositories link clicked");
        break;
      case "projectsLink":
        // ToDo: add function to show projects section
        console.log("projects link clicked");
        renderProjectsList();
        displayAddNewProjectForm();
        break;
      case "packagesLink":
        addPack()
        packageCards(packageList)
        packEventListeners()
        console.log("packages link clicked");
        break;
    }
  });
};

export { displayNavBar, handleNavBarLinksClick };
