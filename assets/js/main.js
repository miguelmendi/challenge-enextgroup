import JSON from './potions.json' assert { type: "json" };

const menuResponsive = document.querySelector("#menu-responsive")
const menu = document.querySelector(".menu")


menuResponsive.addEventListener("click", () => {
    menu.classList.toggle("active")
 
})

function potions() {
  fetch("potions.json").then((response) => {
    response.json().then((potions) => {
      console.log(potions);
    })
  })
}