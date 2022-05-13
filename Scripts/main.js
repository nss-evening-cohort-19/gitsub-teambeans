console.log('beans')
import displayNavBar from "./navbar.js";
import renderPin from "./Overview.js";
import renderProfile from "./renderProfilecard.js"
import {fakeRepos} from "./fakedata.js";
import renderRepoForm from "./reposForm.js";
import eventListenerRepo from "./eventListenerRepo.js";
import footerLine from "./footer.js";
import repos from "./renderRepos.js";
const startApp = () => {
  displayNavBar();
 renderProfile();
  repos(fakeRepos);
  renderRepoForm();
  console.log(fakeRepos);
  eventListenerRepo();
  footerLine();
};

startApp();
