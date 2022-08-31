const BASE = process.env.REACT_APP_API_BASE_URL;

export const MOVIE_API = {
  SEARCH_BY_TITLE: (title) => `${BASE}&s=${title}&type=movie&page=1`,
  SEARCH_BY_ID: (id) => `${BASE}&i=${id}&type=movie`,
};