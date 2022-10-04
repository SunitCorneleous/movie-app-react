const apiKey = process.env.REACT_APP_MOVIE_API_KEY;

export const requests = {
  popularMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`,
};
