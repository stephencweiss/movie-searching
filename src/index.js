// import "./styles.css";
import { searchData } from "./helpers/searchData";

const searchInput = document.querySelector(".search-input");
const searchResults = document.querySelector(".results");

function showSearchResults(searchQuery) {
  const regex = new RegExp(searchQuery, "gi");
  searchData(searchQuery).then(results => {
    const html = results.map(movie => {
      const title = movie.title.replace(
        regex,
        `<span class='query-highlight'>${searchQuery}</span>`
      );

      return `
      <li>
        <span class='title'>${title}</span>
        <span class='rating'>${movie.rating}</span>
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
