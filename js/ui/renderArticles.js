export function renderArticles(articlesToRender) {
  const conteiner = document.querySelector(".articles-conteiner");

  conteiner.innerHTML = "";

  articlesToRender.forEach(function (article) {
    conteiner.innerHTML += `<a class="article" href="favourites.html?id=${article.id}"
      <h4>Title: ${article.title}</h4>
      <p>Summary: ${article.summary}</p>
      <p>Author: ${article.author}</p></a>`;
  });
}
