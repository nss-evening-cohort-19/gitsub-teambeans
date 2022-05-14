import renderToDom from "./renderToDom.js";


export const packageList = [
    {
        id: 1,
        title: "Docker",
        content: "A software platform used for building aplications based on containers"
    },
    {
      id: 2,
      title: "Apache Maven",
      content: "A default package manager used for the Java programming language and the Java runtime environment."
    },
    {
      id: 3,
      title: "NuGet",
      content: "A free and open source package manager used for the Microsoft development platforms including .NET."
    }
]
export const search = (event) => {
  console.log(event)
  const userInput = event.target.value.toLowerCase();
  const searchBar = packageList.filter(packa => 
    packa.title.toLowerCase().includes(userInput) || 
     packa.content.toLowerCase().includes(userInput) 
    
  )
  renderCards(searchBar)
}

export const addPack = () => {
  let domString = `<form><div class="mb-3">
    <label for="addPackage" class="form-label">Title</label>
    <input type="text" class="form-control" id="addTitle" placeholder="name@example.com">
  </div>
  <div class="mb-3">
    <label for="addContent" class="form-label">Type something...</label>
    <textarea class="form-control" id="addContent" rows="3"></textarea>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
  </form>`
  renderToDom("#formContent", domString)
}


export const packageCards = (packageList) => {
    let domString = "";
    for (let pack of packageList) {
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
    renderToDom('#mainContent', domString)
}

export const packEventListeners = () => {
  document.querySelector('#mainContent').addEventListener('click', (e) => {
    const [method, id] = e.target.id.split('--')
    const index = packageList.findIndex(p => p.id === parseInt(id))

      if (e.target.id.includes('delete')) {
        console.log('deleted')
        packageList.splice(index, 1)
        packageCards(packageList)
      }
    
  })


  const form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newPackage = {
      title: document.querySelector("#addTitle").value,
      content: document.querySelector('#addContent').value
    }
    console.log(newPackage)
    packageList.push(newPackage);
    packageCards(packageList)
    form.reset();
  })


}



