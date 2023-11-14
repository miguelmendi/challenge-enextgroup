import JSON from './potions.json' assert { type: "json" };
console.log(JSON)

let potionsDiv = document.querySelectorAll(".main-img")

function getId()  {
  for(var el of potionsDiv){
    el.addEventListener('click', function(){
      console.log(this.id);
      return this.id
    });
  }   
}

function addInfos() {
  switch (getId()) {
    case
  }

}

  
getId()



const menuResponsive = document.querySelector("#menu-responsive")
const menu = document.querySelector(".menu")

menuResponsive.addEventListener("click", () => {
    menu.classList.toggle("active")
 
})

