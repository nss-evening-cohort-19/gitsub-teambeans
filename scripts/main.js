import repos from "./renderRepos.js";
import { renderPin, pinnedCard } from "./overview.js";
import renderProfile from "./renderProfilecard.js"
import {fakeRepos} from "./fakedata.js";
import renderRepoForm from "./reposForm.js";
import eventListenerRepo from "./eventListenerRepo.js";
import { displayNavBar, handleNavBarLinksClick } from "./navbar.js";
import {displayAddNewProjectForm} from "./projects.js"
import footerLine from "./footer.js";

console.log('beans')

const startApp = () => {
  renderProfile();
  displayNavBar();
  renderPin(fakeRepos);
  pinnedCard(fakeRepos);
  handleNavBarLinksClick();
  footerLine();
};

startApp();