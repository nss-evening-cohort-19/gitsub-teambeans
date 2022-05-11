import renderProfile from "./renderProfilecard.js";
import displayNavBar, { handleNavBarLinksClick } from "./navbar.js";

console.log("beans");
const startApp = () => {
  renderProfile();
  displayNavBar();
  handleNavBarLinksClick();
};

startApp();
