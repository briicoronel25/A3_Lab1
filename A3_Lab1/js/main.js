(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework
var gallery = document.querySelectorAll(".thumbInfo img"),
var modelInfo = document.querySelector(".modelDetails"),
var price = document.querySelector(".priceInfo"),
var modelName = document.querySelector(".modelName");


function changeElement (){

  let objectIndex = carData[this.id];

  console.log("fired")
  //cambiar por var
  model.firstChild.nodeValue = objectIndex.headline;
  price.firstChild.nodeValue = objectIndex.text;

  modelName.classList.remove(appliedClass);
  price.classList.remove(appliedClass);
  modelInfo.classList.remove(appliedClass);

  modelName.classList.add(this.id);
  price.classList.add(this.id);
  modelInfo.classList.add(this.id);

  modelName.textContent = objectIndex.model;
  price.textContent = objectIndex.price;
  modelInfo.textContent = objectIndex.info;

  this.style.opacity = 1.0;

  appliedClass = this.id;
}

})();
