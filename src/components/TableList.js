import { useDispatch } from 'react-redux';
import { Table } from 'react-bootstrap';
import { fetchMovie } from '../store/movie';

function TableList({ movies, header, setOpen }) {
  const dispatch = useDispatch();

  function handleTitleClick(id) {
    dispatch(fetchMovie(id));
    setOpen(true);
  }

  return (
    <>
      <Table borderless>
        <thead style={{ borderBottom: '1px solid black' }}>
          <tr>
            {
              header.map((hdr, i) => (
                <th key={i}>{ hdr !== 'Star' ? hdr : '' }</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            movies.map((movie, i) => (
              <tr key={i}>
                <td>
                  <button 
                    type="button" 
                    data-toggle="modal"
                    data-target="#movieDetail"
                    className="title-button" 
                    onClick={() => handleTitleClick(movie.imdbID)}
                  >
                    { movie.Title }
                  </button>
                </td>
                <td>{ movie.Year }</td>
                <td>{ movie.imdbID }</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </>
  )
}

export default TableList;