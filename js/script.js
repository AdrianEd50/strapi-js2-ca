import { baseUrl } from "./constants/api.js";
import { renderArticles } from "./ui/renderArticles.js";
import { searchForArticles } from "./ui/searchForArticles.js";

const articlesUrl = baseUrl + "articles";

(async function () {
  try {
    const response = await fetch(articlesUrl);
    const articles = await response.json();

    console.log(articles);

    renderArticles();
    searchForArticles();
  } catch (error) {
    console.log(error);
  }
})();
