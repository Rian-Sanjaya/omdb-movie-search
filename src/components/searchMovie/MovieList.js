import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { getMovies, getLoading, getTotal, fetchMoreMovies } from '../../store/movie';
import TableList from './TableList';
import MovieDetail from './MovieDetail';
import Loading from '../../components/Loading';

function MovieList({ tabKey }) {
  const [openModal, setOpenModal] = useState(false)
  const movies = useSelector(getMovies);
  const loading = useSelector(getLoading);
  const total = useSelector(getTotal);
  const dispatch = useDispatch();
  const tableHeader = ['Title', 'Year', 'imDB ID', 'Star'];
  
  function handleMoreClick() {
    dispatch(fetchMoreMovies());
  }

  return (
    <>
      <div className="movie-list-container">
        {
          movies.length > 0 && 
          <>
            <TableList movies={movies} header={tableHeader} setOpen={setOpenModal} tabKey={tabKey} />
            {
              total && movies.length < total && 
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant="outline-dark" size="sm" onClick={() => handleMoreClick()}>more</Button>
              </div>
            }
          </>
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