import _ from "lodash";
import { searchData } from "./helpers/searchData";

const POSTER_PLACEHOLDER =
  "https://www.theprintworks.com/wp-content/themes/psBella/assets/img/film-poster-placeholder.png";

const searchInput = document.querySelector(".search-input");
const searchResults = document.querySelector(".results");

function showSearchResults(searchQuery) {
  const regex = new RegExp(searchQuery, "gi");
  searchData(searchQuery).then(results => {
    const html = results.map(movie => {
      const title = movie.Title.replace(
        regex,
        `<span class='query-highlight'>${searchQuery}</span>`
      );

      return `
      <li class='movie-result'>
        <div class='movie-details'>
          <span class='title'>${title}</span>
          <span class='year'>${movie.Year}</span>
        </div>
        <img class='cropped-poster' src=${
          movie.Poster !== "N/A" ? movie.Poster : POSTER_PLACEHOLDER
        }></img>
        </li>
    `;
    });

    searchResults.innerHTML = html.join("");
  });
}

function handleChange() {
  showSearchResults(this.value);
}

const optimizedHandleChange = _.debounce(handleChange,200);

searchInput.addEventListener("change", optimizedHandleChange);
searchInput.addEventListener("keyup", optimizedHandleChange);
