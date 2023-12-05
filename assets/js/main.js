import JSON from './potions.json' assert { type: "json" };
const menuResponsive = document.querySelector("#menu-responsive")
const menu = document.querySelector(".menu")
const aside = document.querySelector(".aside")
const insertAside = document.querySelector(".insert-aside")
const body = document.querySelector(".body")
let potionsDiv = document.querySelectorAll(".main-img")
let close = document.querySelector(".close")
let myId 
let currentItem

const asideTemplate = () => {
 return `
    <div class="aside-img">
      <img  src="../assets/images/${currentItem.image}" alt="">
    </div>
    <div class="aside-content">
      <div class="aside-content-tittle">
        <h2 class="aside-h2">${currentItem.name}</h2>
      </div> 
      <div class="aside-text-effect">
        <h2 class="aside-h2">Use/Effect</h2>
        <p>${currentItem.effect}</p>
      </div>
      <div class="aside-ingredients">
        <h2 class="aside-h2">Ingredients</h2>
        ${currentItem.ingredients.map((i) => {
          return `<p>${i}</p>`
        }).join('')}
      </div>
      <div class="aside-price">
        <h2 class="aside-h2">Price</h2>
        <span class="price">${currentItem.price}</span>
      </div>
      <div class="aside-button">
        <button>add to cart</button>
      </div>
    </div>
`
}


potionsDiv.forEach((e) => {
  e.addEventListener("click", function() {
    myId = this.dataset.id 
    currentItem = JSON.potions[myId]
    insertAside.innerHTML = asideTemplate()
    addClassActive()
    asideTemplate()
    
  })
  
})

menuResponsive.addEventListener("click", () => {
    menu.classList.toggle("active")
 
})

 
close.addEventListener("click", ()=> {
  aside.classList.remove("active")
})
  
function addClassActive() {
  aside.classList.add("active")
  //body.classList.add("opacity")
}



