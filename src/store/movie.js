import { getAPI } from '../api/api-methods';
import { MOVIE_API } from '../api/api-url';

const initialState = {
  title: '',
  movies: [],
  movie: null,
  page: 0,
  total: 0,
  error: '',
};

export function movieReducer(state = initialState, action) {
  switch (action.type) {
    case TITLE_CHANGED:
      return { 
        ...state, 
        title: action.payload,
      };
    case MOVIES_FETCH:
      return { 
        ...state, 
        movies: action.payload.movies, 
        total: action.payload.total, 
        page: 1, 
        error: '',
      };
    case MOVIE_FETCH:
      return {
        ...state,
        movie: action.payload,
        error: '',
      }
    case EMPTY_MOVIES:
      return { 
        ...state, 
        movies: [], 
        total: 0, 
        page: 0, 
        error: action.payload, 
      };
      case EMPTY_MOVIE:
        return { 
          ...state, 
          movie: null, 
          error: action.payload, 
        };
    default:
      return state;
  }
};

// selectors
export const getTitle = (state) => state.movies.title;
export const getMovies = (state) => state.movies.movies;
export const getMovie = (state) => state.movies.movie;
export const getPage = (state) => state.movies.page;
export const getTotal = (state) => state.movies.total;
export const getError = (state) => state.movies.error;

// action creators
export const titleChanged = (title) => ({
  type: TITLE_CHANGED,
  payload: title,
});

export const moviesFetch = (movies,total) => ({
  type: MOVIES_FETCH,
  payload: { movies, total },
})

export const movieFetch = (movie) => ({
  type: MOVIE_FETCH,
  payload: movie,
});

export const emptyMovies = (errorMessage) => ({
  type: EMPTY_MOVIES,
  payload: errorMessage,
})

export const emptyMovie = (errorMessage) => ({
  type: EMPTY_MOVIE,
  payload: errorMessage,
})

export function fetchMovies(title) {
  return (dispatch) => {
    getAPI(MOVIE_API.SEARCH_BY_TITLE(title))
    .then(res => {
      if (res.Response === "True") {
        dispatch(moviesFetch(res.Search, res.totalResults))
      } else if (res.Response === "False") {
        const errorMessage = res.Error || '';
        dispatch(emptyMovies(errorMessage))
      } 
    })
    .catch(err => {
      console.error('error: ', err);
    })
  }
};

export function fetchMovie(id) {
  return (dispatch) => {
    getAPI(MOVIE_API.SEARCH_BY_ID(id))
    .then(res => {
      console.log('res: ', res);
      if (res.Response === "True") {
        dispatch(movieFetch(res));
      } else if (res.Response === "False") {
        const errorMessage = res.Error || '';
        dispatch(emptyMovie(errorMessage));
      }
    })
    .catch(err => {
      console.error('error: ', err);
    })
  }
}

// action types
export const TITLE_CHANGED = 'movie/titleChanged';
export const MOVIES_FETCH = 'movie/moviesFetch';
export const MOVIE_FETCH = 'movie/movieFetch';
export const EMPTY_MOVIES = 'movie/emptyMovies';
export const EMPTY_MOVIE = 'movie/emptyMovie';