import renderToDom from "./renderToDom.js";
// import { renderProjectsList } from "./projects";

const displayNavBar = () => {
  const domString = `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item" id="overviewLink">
              <a class="nav-link active" aria-current="page" href="#">Overview</a>
            </li>
            <li class="nav-item" id="repositoriesLink">
              <a class="nav-link" href="#"> Repositories</a>
            </li>
            <li class="nav-item" id="projectsLink">
              <a class="nav-link" href="#">Projects</a>
            </li>
            <li class="nav-item" id="packagesLink">
              <a class="nav-link" href="#">Packages</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>`;

  renderToDom("#navBar", domString);
};

const handleNavBarLinksClick = () => {
  document.getElementById().addEventListener("click", (event) => {
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
        break;
      case "packagesLink":
        // ToDo: add function to show packages section
        console.log("packages link clicked");
        break;
    }
  });
};

export default { displayNavBar, handleNavBarLinksClick };
