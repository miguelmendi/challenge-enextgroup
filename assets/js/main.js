import JSON from './potions.json' assert { type: "json" };
console.log(JSON)

function addClassActive() {
  aside.classList.add("active")
  addInfos()
}

let potionsDiv = document.querySelectorAll(".main-img")

 function getId()  {
  for(var el of potionsDiv){
    el.addEventListener('click', function(){
      let myId = this.id
      let addJn = JSON.potions[myId]
      
      console.log(addJn)
      addClassActive()
      return addJn
    });
  }   
}

getId()
 
const aside = document.querySelector(".aside")
const close = document.querySelector(".close")
const asideImg = document.querySelector(".aside-img")
const asidePrice = document.querySelector(".price")

function addInfos() {
  
  switch (getId()) {
    case 1:
      asideImg.content = addjn[1].image
      asidePrice.textContent = addJn[1].name
    case 2:

    case 3:

    case 4:

    case 5:

    case 6:
  }

}

const menuResponsive = document.querySelector("#menu-responsive")
const menu = document.querySelector(".menu")

menuResponsive.addEventListener("click", () => {
    menu.classList.toggle("active")
 
})

close.addEventListener("click", ()=> {
  aside.classList.remove("active")
})
