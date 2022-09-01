import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getLoading } from '../../store/movie';
import FavouriteTable from './FavouriteTable';
import MovieDetail from '../searchMovie/MovieDetail';
import Loading from '../../components/Loading';

function MovieList({ tabKey }) {
  const [favourites, setFavourites] = useState([]);
  const [openModal, setOpenModal] = useState(false)
  const loading = useSelector(getLoading);
  const tableHeader = ['Title', 'Year', 'Language', 'Star'];

  useEffect(() => {
    const myFavourites = JSON.parse(localStorage.getItem('myFavourite'));
    if (myFavourites) setFavourites(myFavourites);
    else setFavourites([]);
    
  }, [tabKey])

  return (
    <>
      <div className="favourite-list-container">
        {
          favourites.length > 0 && 
          <FavouriteTable movies={favourites} header={tableHeader} setOpen={setOpenModal} tabKey={tabKey} />
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