console.log('beans')
<<<<<<< HEAD
import repos from "./renderRepos.js";
=======
import renderPin from "./Overview.js";
>>>>>>> main
import renderProfile from "./renderProfilecard.js"
<<<<<<< HEAD
impoe
=======
import {fakeRepos} from "./fakedata.js";
import renderRepoForm from "./reposForm.js"
import eventListenerRepo from "./eventListenerRepo.js";
>>>>>>> main
const startApp = () => {
  displayNavBar();
  renderProfile();
  repos(fakeRepos);
  renderRepoForm();
  console.log(fakeRepos);
  eventListenerRepo();
  
};

startApp();
