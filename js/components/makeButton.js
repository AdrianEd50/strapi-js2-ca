import clearAllButtons from "./clearAllButton.js";

const clearBtnConteiner = document.querySelector("#clear");

clearBtnConteiner.innerHTML += `<button>clear all</button>`;
clearAllButtons();
