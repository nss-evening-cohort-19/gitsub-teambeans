import renderToDom from "./renderToDom.js"

renderProfile = () => {
  let domString = `
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Jon Doe</h5>
    <p>J-Doe47</p>
    <p class="card-text">Building deer centric tech.
    Inventor of hoofscript</p>
    <div>
    <button type="button" class="btn btn-primary">Follow</button>
    <button type="button" class="btn btn-primary">Money Plz</button>
    <button type="button" class="btn btn-primary">...</button>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">I live in the woods.</li>
    <li class="list-group-item">anactualdeer@hoof.com</li>
    <li class="list-group-item">hoofscript.com</li>
  </ul>
  <div class="card-body">
<p>Highlights</p>
<p>Organizations</p>
<p>Sponsors</p>
  </div>
</div>`;
renderToDom ('profileContainer', domString);
};
export default renderProfile();
