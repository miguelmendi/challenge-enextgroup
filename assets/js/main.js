import JSON from './potions.json' assert { type: "json" };
console.log(JSON)

let potionsDiv = document.querySelectorAll(".main-img")

 function getId()  {
  for(var el of potionsDiv){
    el.addEventListener('click', function(){
      const myId = this.id
      
      console.log(myId)
      return myId
    });
  }   
}



getId()
 

const aside = document.querySelector(".aside")
const asideImg = document.querySelector("aside-img")

function addInfos() {
  switch (getId()) {
    case 1:
      asideImg.content = JSON.potions[1].image
    case 2:

    case 3:

    case 4:

    case 5:

    case 6:
  }

}
addInfos()
getId()



const menuResponsive = document.querySelector("#menu-responsive")
const menu = document.querySelector(".menu")

menuResponsive.addEventListener("click", () => {
    menu.classList.toggle("active")
 
})

