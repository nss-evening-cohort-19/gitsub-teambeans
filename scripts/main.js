import { search } from "./packages.js";
import renderProfile from "./renderProfilecard.js"
import { packageList } from "./packages.js";
import { packageCards } from "./packages.js";
import { addPack } from "./packages.js";
import { packEventListeners } from "./packages.js";






import fakeRepos from "./fakedata.js";


import repos from "./renderRepos.js";
// import renderPin from "./Overview.js";


import renderRepoForm from "./reposForm.js"
import eventListenerRepo from "./eventListenerRepo.js";
import { displayNavBar, handleNavBarLinksClick } from "./navbar.js";

console.log('beans')

const startApp = () => {
  
  packageCards(packageList)
  addPack()
  packEventListeners()
  renderProfile();
  displayNavBar();
  handleNavBarLinksClick();
  repos(fakeRepos);
  renderRepoForm();
  
  eventListenerRepo();
};

startApp();
