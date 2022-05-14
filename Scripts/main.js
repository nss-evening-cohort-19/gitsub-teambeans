
import renderProfile from "./renderProfilecard.js"


console.log('beans')


console.log('beans')

import repos from "./renderRepos.js";

import renderPin from "./Overview.js";

import renderProfile from "./renderProfilecard.js"
import {fakeRepos} from "./fakedata.js";
import renderRepoForm from "./reposForm.js"
import eventListenerRepo from "./eventListenerRepo.js";

const startApp = () => {

  renderProfile();
  repos(fakeRepos);
  renderRepoForm();
  console.log(fakeRepos);
  eventListenerRepo();
  
};

startApp();
