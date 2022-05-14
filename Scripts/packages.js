import renderToDom from "./renderToDom";


export const packageList = [
    {
        id: 1,
        title: "Docker",
        content: "A software platform used for building aplications based on containers"
    }
]
const search = (event) => {
  console.log(event)
  const userInput = event.target.value.toLowerCase();
  const searchBar = packageList.filter(packa => 
    packa.title.toLowerCase().includes(userInput) || 
     packa.content.toLowerCase().includes(userInput) 
    
  )
  renderCards(searchBar)
}

const addPack = () => {
  let domString = `<form><div class="mb-3">
    <label for="addPackage" class="form-label">Title</label>
    <input type="email" class="form-control" id="addTitle" placeholder="name@example.com">
  </div>
  <div class="mb-3">
    <label for="addContent" class="form-label">Type something...</label>
    <textarea class="form-control" id="addContent" rows="3"></textarea>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
  </form>`
  renderToDom("#formContainer", domString)
}


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
    renderToDom('#mainContent', domString)
}
const eventListeners = () => {
  document.querySelector('#mainContent').addEventListener('click', (e) => {
    if (e.target.id) {
      const [method, pack] = e.target.id.split("--")
  
      const index = packageList.findIndex(p => p.id === parseInt(id))
  
      if (e.target.id.includes('delete')) {
        console.log('deleted')
        packageList.splice(index, 1)
        packageCards(packageList)
      }
    }
  })

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newPackage = {
      id:Math.floor(Math.random() * 10)+5,
      title: document.querySelector("#package-title").value,
      content: document.querySelector('#package-content').value
    }
    console.log(newPackage)
    packageList.push(newPackage);
    packageCards(packageList)
    form.reset();
  })


}



const startApp = () => {
    document.querySelector('searchInput').addEventListener('keyup', search)
    addPack()
    eventListeners()
    packageCards(packageList);
  };
  
  startApp();