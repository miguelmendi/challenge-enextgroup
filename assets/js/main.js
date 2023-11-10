const menuResponsive = document.querySelector("#menu-responsive")
const menu = document.querySelector(".menu")


menuResponsive.addEventListener("click", () => {
  if(menu.classList.contains("active")) {
    menu.classList.remove("active")
  }else {
    menu.classList.add("active")
  }
})

function potions() {
  fetch("potions.json").then((response) => {
    response.json().then((potions) => {
      console.log(potions);
    })
  })
}