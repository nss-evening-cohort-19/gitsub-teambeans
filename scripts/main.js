import repos from "./renderRepos.js";
import renderPin from "./overview.js";
import renderProfile from "./renderProfilecard.js"
import {fakeRepos} from "./fakedata.js";
import renderRepoForm from "./reposForm.js"
import eventListenerRepo from "./eventListenerRepo.js";
import { displayNavBar, handleNavBarLinksClick } from "./navbar.js";
import overviewDom from "./overviewCard.js";

console.log('beans')

const startApp = () => {
  renderProfile();
  displayNavBar();
  renderPin(fakeRepos);
  overviewDom(fakeRepos);
  handleNavBarLinksClick();
  repos(fakeRepos);
  renderRepoForm();
  console.log(fakeRepos); //ToDo: only for testing, please remove:
  eventListenerRepo();
};

startApp();
