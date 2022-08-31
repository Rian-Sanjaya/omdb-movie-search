import { useDispatch } from 'react-redux';
import { Table } from 'react-bootstrap';
import { fetchMovie, onUpdateFavourite } from '../store/movie';

function TableList({ movies, header, setOpen }) {
  const dispatch = useDispatch();

  function handleTitleClick(id) {
    dispatch(fetchMovie(id))
      .then(() => {
        setOpen(true);
      });
  }

  function handleFavClick(mov) {
    dispatch(onUpdateFavourite(mov))
      .then(() => {
        const myFavourites = JSON.parse(localStorage.getItem('myFavourite'));

        dispatch(fetchMovie(mov.imdbID))
          .then((res) => {
            const newFavourite = {
              imdbID: mov.imdbID,
              Title: mov.Title,
              Year: mov.Year,
              Language: res.Language,
            }

            if (mov.favourite) {
              if (myFavourites) {
                const newFavs = myFavourites.filter(fav => fav.imdbID !== mov.imdbID);
                localStorage.setItem('myFavourite', JSON.stringify(newFavs))
              }
            } else {
              if (myFavourites) {
                myFavourites.push(newFavourite);
                localStorage.setItem('myFavourite', JSON.stringify(myFavourites));
              } else {
                localStorage.setItem('myFavourite', JSON.stringify([newFavourite]));
              }
            }
          })
      });
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
            movies.map((movie) => (
              <tr key={movie.imdbID}>
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
                <td>
                  <div className="fav" onClick={() => handleFavClick(movie)}>
                    <svg className={`fav-star ${movie.favourite ? 'favourite' : ''}`} viewBox="0 0 114 110">
                      <path d="M48.7899002,5.95077319 L39.3051518,35.1460145 L8.60511866,35.1460145 C4.87617094,35.1519931 1.57402643,37.5554646 0.422104463,41.1020351 C-0.7298175,44.6486057 0.529798011,48.5337314 3.54354617,50.7297298 L28.3840111,68.7758317 L18.8992627,97.971073 C17.7496089,101.520283 19.0141379,105.406227 22.0323508,107.599168 C25.0505637,109.792109 29.1370771,109.794067 32.1573906,107.604021 L56.9864557,89.5693186 L81.8269206,107.615421 C84.8472342,109.805467 88.9337475,109.803509 91.9519605,107.610568 C94.9701734,105.417627 96.2347024,101.531683 95.0850486,97.9824729 L85.6003001,68.7986315 L110.440765,50.7525296 C113.466376,48.5582894 114.732852,44.663975 113.576698,41.1097771 C112.420545,37.5555791 109.105303,35.1516627 105.367793,35.1574144 L74.6677595,35.1574144 L65.1830111,5.96217312 C64.0286485,2.41064527 60.7208743,0.00457304502 56.9864557,5.53367114e-06 C53.2527571,-0.00420898295 49.9421526,2.39931752 48.7899002,5.95077319 Z"></path>
                    </svg>
                  </div>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </>
  )
}

export default TableList;