import { useSelector } from 'react-redux';
import { getMovie } from '../../store/movie';

function MovieDetail({ open, setOpen }) {
  const movie = useSelector(getMovie);

  return (
    <div className={`modal-movie-detail ${open ? '' : 'closed'}`} id="modal-movie-detail">
      <div><button onClick={() => setOpen(false)}>x</button></div>
      <div className="modal-movie-detail-content">
        <h5>{ movie?.Title }</h5>
        <p><span className="text-label">Year:</span> { movie?.Year }</p>
        <p><span className="text-label">Released:</span> { movie?.Released }</p>
        <p><span className="text-label">Director:</span> { movie?.Director }</p>
        <p><span className="text-label">Actors:</span> { movie?.Actors }</p>
        <p><span className="text-label">Plot:</span> { movie?.Plot }</p>
        <p><span className="text-label">Awards:</span> { movie?.Awards }</p>
        <p><span className="text-label">Box Office:</span> { movie?.BoxOffice }</p>
        <p><span className="text-label">Country:</span> { movie?.Country }</p>
        <p><span className="text-label">Genre:</span> { movie?.Genre }</p>
        <p><span className="text-label">Language:</span> { movie?.Language }</p>
        <p><span className="text-label">Rated:</span> { movie?.Rated }</p>
        <p><span className="text-label">Run Time:</span> { movie?.Runtime }</p>
        <p><span className="text-label">Writer:</span> { movie?.Writer }</p>
        <p><span className="text-label">imdb Rating:</span> { movie?.imdbRating }</p>
        <p><span className="text-label">imdb Votes:</span> { movie?.imdbVotes }</p>
      </div>
    </div>
  )
}

export default MovieDetail;