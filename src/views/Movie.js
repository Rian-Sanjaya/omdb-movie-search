import { Container, Tabs, Tab } from 'react-bootstrap';
import InputSearch from '../components/searchMovie/InputSearch';
import MovieList from '../components/searchMovie/MovieList';

function Movie() {
  return (
    <div className="movie-wrapper">
      <Container className="movie-container">
        <Tabs
          defaultActiveKey="search movie"
          id="movie-list"
          className="mb-2"
        >
          <Tab eventKey="search movie" title="Search Movie">
            <section>
              <InputSearch />
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