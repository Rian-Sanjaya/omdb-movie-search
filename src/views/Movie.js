import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Tabs, Tab } from 'react-bootstrap';
import { getLoading } from '../store/movie';
import InputSearch from '../components/searchMovie/InputSearch';
import MovieList from '../components/searchMovie/MovieList';
import FavouriteList from '../components/myFavourite/FavouriteList';
import Loading from '../components/Loading';

function Movie() {
  const [tabKey, setTabKey] = useState('search movie')
  const loading = useSelector(getLoading);
  // const loading = true;

  function handleTabClicked(k) {
    setTabKey(k)
  }

  return (
    <div className="movie-wrapper">
      <Container className="movie-container">
        <Tabs
          defaultActiveKey="search movie"
          id="movie-list"
          className="mb-2"
          activeKey={tabKey}
          onSelect={(k) => handleTabClicked(k)}
        >
          <Tab eventKey="search movie" title="Search Movie">
            <section className="movie-list-section">
              <InputSearch />
              {
                loading && 
                <Loading />
              }
              <MovieList tabKey={tabKey} />
            </section>
          </Tab>
          <Tab eventKey="my favourite" title="My Favourite">
            <section className="favourite-list-section">
              {
                loading && 
                <Loading />
              }
              <FavouriteList tabKey={tabKey} />
            </section>
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
}

export default Movie;