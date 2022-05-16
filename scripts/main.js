import { search } from "./packages.js";
import renderProfile from "./renderProfilecard.js"
import { packageList,packageCards, addPack, packEventListeners } from "./packages.js";





// import fakeRepos from "./fakedata.js";


// import repos from "./renderRepos.js";



import renderRepoForm from "./reposForm.js"
import repos from "./renderRepos.js";
import { renderPin, pinnedCard } from "./overview.js";

import {fakeRepos} from "./fakedata.js";
import renderRepoForm from "./reposForm.js";
import eventListenerRepo from "./eventListenerRepo.js";
import { displayNavBar, handleNavBarLinksClick } from "./navbar.js";
import {displayAddNewProjectForm} from "./projects.js"
import footerLine from "./footer.js";

console.log('beans')

const startApp = () => {
  
  packageCards(packageList)
  addPack()
  
  renderProfile();
  displayNavBar();
  renderPin(fakeRepos);
  pinnedCard(fakeRepos);
  handleNavBarLinksClick();
  // repos(fakeRepos);
  // renderRepoForm();
  // packEventListeners()
  eventListenerRepo();
  footerLine();
};

startApp();
