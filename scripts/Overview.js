import renderToDom from './renderToDom.js';
import fakeRepos from './fakedata.js';


//pin module
let domString = "";

const renderPin = () => {
    domString += 
    `<!-- Button trigger modal -->
    <button id="repoModal-btn" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    Customize your pins
    </button>
    
    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
    <div class="modal-content">
    <div class="modal-header">
    <h5 class="modal-title" id="staticBackdropLabel">Edit pinned items</h5>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
    <ul id="repoList" class="list-group">
    <input disabled>
    </input>
    <li> 
      <ul id="repoList1" class="list-group">
      </ul>
    </li>
    </ul>
    </div>
    <div class="modal-footer">
    <div id="message" class="message"></div>
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    <button id="savePinned-btn" type="button" class="btn btn-primary">Save pins</button>
    </div>
    </div>
    </div>
    </div>`;
    renderToDom("#pinContainer", domString);
};
 
//card
const pinnedCard = (array) => {
  console.log("In pinnedCard");
  let domString = "";
  for (const repo of array) { 
    domString +=`
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${repo.title}</h5>
      <p class="card-text">${repo.codetype}</p>
      <a href="#" class="card-link">Card link</a>
    </div>
    </div>`;
  }
  renderToDom('#mainContent', domString);
};

//event listener
const pinEventListener = () => {
  document.querySelector("#repoModal-btn").addEventListener("click", (e) => {
    let repoList = "";
    let index = 0;
      for (const i of fakeRepos) {
        const pinned = i.pinned === true;
        repoList += `<li class="list-group-item">
        <input data-index="${index}" id="${i.repoId}" class="checkboxes form-check-input me-1" ${
          pinned ? "checked=true" : ""
        } name="checkbox" type="checkbox" value="${i.title}" aria-label="...">
        ${i.title}
      </li>`;
      index++;
      }
      renderToDom("#repoList1", repoList);
  });
  document.querySelector("#savePinned-btn").addEventListener("click", (e) => {
    let repo = [];
    let chkAll = document.querySelector("#repoList1").querySelectorAll("input[type=checkbox]");
    if(chkAll && chkAll.length) {
      for(var count = 0;count < chkAll.length;count++) {
        let chk = chkAll[count];
        if(chk && chk.checked) {
          let index = parseInt(chk.getAttribute("data-index"));
          repo.push(fakeRepos[index]);
        }
      }
    }
    pinnedCard(repo);
  });
};

const clickCheck = () => {
  let countMessage = document.querySelector("#message");
  const checkboxes = document.getElementsByName("checkbox");
  const limit = 4;
  countMessage.innerHTML = "";
  for (let i = 0; i < checkboxes.length; i++) {
    let checkcount = 0;
    for (let i = 0; i < checkboxes.length; i++) {
      checkcount += checkboxes[i].checked ? 1 : 0;
      countMessage.innerHTML = `${limit - checkcount} remaining`;
    }
  }
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].onclick = function () {
      let checkcount = 0;
      for (let i = 0; i < checkboxes.length; i++) {
        checkcount += checkboxes[i].checked ? 1 : 0;
        countMessage.innerHTML = `${limit - checkcount} remaining`;
      }
      if (checkcount >= limit) {
        let checked = document.querySelectorAll(".checkboxes");
        for (const item of checked) {
          if (item.checked === false) {
            item.setAttribute("disabled", "true");
            clearCheck();
          }
        }
      }
    };
  }
};

const clearCheck = () => {
  let countMessage = document.querySelector("#maxMessage");
  const checkboxes = document.getElementsByName("checkbox");
  const limit = 4;
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].onclick = function () {
      var checkcount = 0;
      for (let i = 0; i < checkboxes.length; i++) {
        checkcount += checkboxes[i].checked ? 1 : 0;
      }
      if ((checkcount = limit - 1)) {
        countMessage.innerHTML = `${limit - checkcount} remaining`;
        let checked = document.querySelectorAll(".checkboxes");
        for (const item of checked) {
          item.removeAttribute("disabled");
          clickCheck();
        }
      }
    };
  }
};


setTimeout(() => {
  pinEventListener();
},1000)



export { renderPin, pinnedCard, pinEventListener }  