import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getMovies } from '../../store/movie';
import TableList from '../TableList';
import MovieDetail from './MovieDetail';

function MovieList() {
  const [openModal, setOpenModal] = useState(false)
  const movies = useSelector(getMovies);
  const tableHeader = ['Title', 'Year', 'imDB ID', 'Star'];

  return (
    <>
      <div className="movie-list-container">
        {
          movies.length > 0 && 
          <TableList movies={movies} header={tableHeader} setOpen={setOpenModal} />
        }
      </div>
      <MovieDetail open={openModal} setOpen={setOpenModal} />
    </>
  );
}

export default MovieList;