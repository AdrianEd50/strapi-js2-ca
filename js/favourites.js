import { retriveFavourites } from "./utils/favouriteFunctions.js";

const favourites = retriveFavourites();

const conteiner = document.querySelector(".articles-conteiner");
if (favourites.length === 0) {
  conteiner.innerHTML = "No favourites here...";
}

favourites.forEach((favourite) => {
  conteiner.innerHTML += `<div class="article">
                             <h4>${favourite.title}</h4>
                             <i class="fa fa-heart"></i>
                            </div>`;
});
