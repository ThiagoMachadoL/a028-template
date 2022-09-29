const ulElement = document.getElementById("lista")

const newLi = document.createElement("li")
const newLi2 = document.createElement("li")

const LiZero = document.createTextNode("Item 0")
const LiCinco = document.createTextNode("Item 5")

newLi.appendChild(LiZero)
newLi2.appendChild(LiCinco)

ulElement.insertAdjacentElement("afterbegin", newLi)
ulElement.insertAdjacentElement("beforeend", newLi2)
