import { topMovies } from "../data/topMovies";


export const searchData = searchText => {
  const regex = new RegExp(searchText, "gi");
  fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=96287ec0`)
  
  return new Promise(resolve =>
    resolve(topMovies.filter(m => m.title.match(regex)))
  );
};
