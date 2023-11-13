import JSON from './potions.json' assert { type: "json" };
console.log(JSON)



const menuResponsive = document.querySelector("#menu-responsive")
const menu = document.querySelector(".menu")


menuResponsive.addEventListener("click", () => {
    menu.classList.toggle("active")
 
})

