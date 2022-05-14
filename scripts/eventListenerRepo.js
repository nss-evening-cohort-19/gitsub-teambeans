import {fakeRepos} from "./fakedata.js"
import renderRepoForm from "./reposForm.js"
import repos from "./renderRepos.js";

const eventListenerRepo = () =>{
  const form = document.querySelector("form");
  form.addEventListener('submit', (e) => {
  e.preventDefault();
  const cardId =fakeRepos.map(repo => repo.id).sort((a, b) => a - b);
  const repoId =cardId.length ? cardId[cardId.length - 1] + 1 : 1;
  const repoObj = {
    id: repoId,
    title: document.querySelector("#title").value,
    description: document.querySelector("#description").value,
    codetype: document.querySelector("#codetype").value,
  };
  fakeRepos.push(repoObj);
  repos(fakeRepos);
  form.reset();
  console.log(repoObj);
  console.log(fakeRepos);
});


  //save pin
  const saveRepo = {
    title: document.querySelector('#title').value,
    codetype: document.querySelector('#codetype').value,
    favorites: Math.floor(math.random()*84)
  };

  //pushing it to save pins
  saveFavRepo.push(saveRepo);
  




}
export default eventListenerRepo;
