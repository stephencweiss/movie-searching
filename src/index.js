import { searchData } from "./helpers/searchData";

const searchInput = document.querySelector(".search-input");
const searchResults = document.querySelector(".results");

function showSearchResults(searchQuery) {
  const regex = new RegExp(searchQuery, "gi");
  searchData(searchQuery).then(results => {
    const html = results.map(movie => {
      console.log({ movie });
      const title = movie.Title.replace(
        regex,
        `<span class='query-highlight'>${searchQuery}</span>`
      );

      return `
      <li >
        <span class='title'>${title}</span>
        <span class='year'>${movie.Year}</span>
        <img src=${movie.Poster}></img>
        </li>
    `;
    });

    searchResults.innerHTML = html.join("");
  });
}

function handleChange() {
  showSearchResults(this.value);
}

searchInput.addEventListener("change", handleChange);
searchInput.addEventListener("keyup", handleChange);
