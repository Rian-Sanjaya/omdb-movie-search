import { useSelector } from 'react-redux';
import { Container, Tabs, Tab } from 'react-bootstrap';
import { getLoading } from '../store/movie';
import InputSearch from '../components/searchMovie/InputSearch';
import MovieList from '../components/searchMovie/MovieList';
import Loading from '../components/Loading';

function Movie() {
  const loading = useSelector(getLoading);
  // const loading = true;

  return (
    <div className="movie-wrapper">
      <Container className="movie-container">
        <Tabs
          defaultActiveKey="search movie"
          id="movie-list"
          className="mb-2"
        >
          <Tab eventKey="search movie" title="Search Movie">
            <section className="movie-list-section">
              <InputSearch />
              {
                loading && 
                <Loading />
              }
              <MovieList />
            </section>
          </Tab>
          <Tab eventKey="my-favourite" title="My Favourite">
            Mempunyai pedang panjang
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
}

export default Movie;