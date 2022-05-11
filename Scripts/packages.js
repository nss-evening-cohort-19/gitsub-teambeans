import renderToDom from "./renderToDom";
import { displayNavBar } from "./navbar";

export const packageList = [
    {
        id: 1,
        title: "Docker",
        content: "A software platform used for building aplications based on containers"
    }
]



export const packageCards = () => {
    const domString = '';
    for (pack of packageList) {
        domString += `<div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${pack.title}</h5>
          <p class="card-text">${pack.content}</p>
          <a href="#" class="btn btn-primary">Learn more</a>
          <button type="button" class="btn btn-danger" id="delete--${pack.id}">X</button>
        </div>
      </div>`
    }
    renderToDom('#packageBoi', domString)
}

const startApp = () => {
    displayNavBar();
    packageCards(packageList);
  };
  
  startApp();