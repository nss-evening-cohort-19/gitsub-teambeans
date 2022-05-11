console.log('beans')
import pinnedRepos from "./pinnedrepos.js";
import renderProfile from "./renderProfilecard.js"
import {fakeRepos} from "./fakedata.js";
const startApp = () => {
  renderProfile();
  pinnedRepos(fakeRepos);
};

startApp();
