import { Container, Tabs, Tab, Form } from 'react-bootstrap';

function App() {
  return (
    <div className="app-wrapper">
      <Container className="app-container">
        <Tabs
          defaultActiveKey="search movie"
          id="movie-list"
          className="mb-2"
        >
          <Tab eventKey="search movie" title="Search Movie">
            <Container className="search-input-container">
              <Form.Control type="text" placeholder="Enter movie title here..." />
            </Container>
          </Tab>
          <Tab eventKey="my-favourite" title="My Favourite">
            Mempunyai pedang panjang
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
}

export default App;
