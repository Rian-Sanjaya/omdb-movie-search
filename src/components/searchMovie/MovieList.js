import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getMovies, getLoading } from '../../store/movie';
import TableList from '../TableList';
import MovieDetail from './MovieDetail';
import Loading from '../../components/Loading';

function MovieList() {
  const [openModal, setOpenModal] = useState(false)
  const movies = useSelector(getMovies);
  const loading = useSelector(getLoading);
  const tableHeader = ['Title', 'Year', 'imDB ID', 'Star'];

  return (
    <>
      <div className="movie-list-container">
        {
          movies.length > 0 && 
          <TableList movies={movies} header={tableHeader} setOpen={setOpenModal} />
        }
      </div>
      {
        loading && 
        <Loading />
      }
      {
        !loading && 
        <>
          <MovieDetail open={openModal} setOpen={setOpenModal} />
          <div 
            className={`modal-movie-overlay ${openModal ? '' : 'closed'}`}
            onClick={() => setOpenModal(false)}
          ></div>
        </>
      }
    </>
  );
}

export default MovieList;