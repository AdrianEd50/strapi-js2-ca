import { retriveFavourites } from "../utils/favouriteFunctions.js";

export function renderArticles(articlesToRender) {
  const conteiner = document.querySelector(".articles-conteiner");

  conteiner.innerHTML = "";

  const favourites = retriveFavourites();

  articlesToRender.forEach(function (article) {
    let cssClass = "far";
    const ifObjectExist = favourites.find(function (fav) {
      console.log(fav);

      return parseInt(fav.id) === article.id;
    });

    console.log(ifObjectExist);

    if (ifObjectExist) {
      cssClass = "fa";
    }

    conteiner.innerHTML += `<div class="article" 
      <h4>Title: ${article.title}</h4>
      <p>Summary: ${article.summary}</p>
      <p>Author: ${article.author}</p>
      <i class="${cssClass} fa-heart" data-id="${article.id}" data-title="${article.title}"></i>
      </div>
      `;
  });

  const favouritesButtons = document.querySelectorAll(".article i");

  favouritesButtons.forEach((button) => {
    button.addEventListener("click", hartClick);
  });

  function hartClick() {
    console.log(event);

    event.target.classList.toggle("fa");
    event.target.classList.toggle("far");

    const id = event.target.dataset.id;
    const title = event.target.dataset.title;

    const currentFavouties = retriveFavourites();

    const ifArticleExist = currentFavouties.find(function (fav) {
      return fav.id === id;
    });

    if (!ifArticleExist) {
      const articleToSave = { id: id, title: title };
      currentFavouties.push(articleToSave);
      saveFavourites(currentFavouties);
    } else {
      const newFavourites = currentFavouties.filter((fav) => fav.id !== id);
      saveFavourites(newFavourites);
    }
  }

  function saveFavourites(favourites) {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }
}
