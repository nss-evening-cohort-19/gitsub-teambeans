import { search } from "./packages.js";
import renderProfile from "./renderProfilecard.js"
import { packageList } from "./packages.js";
import { packageCards } from "./packages.js";
import { addPack } from "./packages.js";
import { packEventListeners } from "./packages.js";

import repos from "./renderRepos.js";

import renderPin from "./Overview.js";

import renderProfile from "./renderProfilecard.js"
import {fakeRepos} from "./fakedata.js";
import renderRepoForm from "./reposForm.js"
import eventListenerRepo from "./eventListenerRepo.js";

const startApp = () => {
  document.querySelector('#searchInput').addEventListener('keyup', search)
  packageCards(packageList)
  addPack()
  packEventListeners()
  renderProfile();
  repos(fakeRepos);
  renderRepoForm();
  console.log(fakeRepos);
  eventListenerRepo();
  
};

startApp();
