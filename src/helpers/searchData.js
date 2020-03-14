const dotenv = require( "dotenv");
dotenv.config();

export const searchData = searchText => {
  return fetch(`http://www.omdbapi.com/?s=${searchText}&apikey=${process.env.API_KEY}`).then(res => res.json()).then(res => res.Search)
};
