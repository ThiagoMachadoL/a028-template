

function insereItem(event) {
    const ulElement = document.getElementById("lista")
    const newLi = document.createElement("li")
    const myInput = document.getElementById("meu-input")
    const textLi = document.createTextNode(myInput.value)
    newLi.appendChild(textLi)
    ulElement.insertAdjacentElement("beforeend",newLi)
}