import { renderArticles } from "./renderArticles.js";

export function searhForArticles(articles) {
  const search = document.querySelector(".search");

  searh.onkeyup = function (event) {
    const searchValue = event.target.value.trim().toLowerCase();

    const filteredArticles = articles.filter(function (article) {
      if (article.title.toLowerCase().startsWith(searchValue)) {
        return true;
      }
    });

    renderArticles(filteredArticles);
  };
}