import { useSelector } from 'react-redux';
import { getMovie } from '../../store/movie';

function MovieDetail({ open, setOpen }) {
  const movie = useSelector(getMovie);

  return (
    <div className={`modal-movie-detail ${open ? '' : 'closed'}`}>
      <div className="button-container"><button onClick={() => setOpen(false)}>x</button></div>
      <div className="modal-movie-detail-content">
        {
          movie?.Poster !== "N/A" && 
          <div style={{ width: '200px', margin: '0 auto' }}><img src={ movie?.Poster } alt="Movie Poster" style={{ width: '100%', height: 'auto' }} /></div>
        }
        {
          movie?.Poster === "N/A" &&
          <div style={{ width: '200px', height: '200px', margin: '10px auto 20px' }}><img alt="N/A Poster" /></div>
        }
        <h5>{ movie?.Title }</h5>
        <p className="text-container"><span className="text-label">Year:</span><span className="text-content">{ movie?.Year }</span></p>
        <p className="text-container"><span className="text-label">Released:</span><span className="text-content">{ movie?.Released }</span></p>
        <p className="text-container"><span className="text-label">Director:</span><span className="text-content">{ movie?.Director }</span></p>
        <p className="text-container"><span className="text-label">Actors:</span><span className="text-content">{ movie?.Actors }</span></p>
        <p className="text-container"><span className="text-label">Plot:</span><span className="text-content">{ movie?.Plot }</span></p>
        <p className="text-container"><span className="text-label">Awards:</span><span className="text-content">{ movie?.Awards }</span></p>
        <p className="text-container"><span className="text-label">Box Office:</span><span className="text-content">{ movie?.BoxOffice }</span></p>
        <p className="text-container"><span className="text-label">Country:</span><span className="text-content">{ movie?.Country }</span></p>
        <p className="text-container"><span className="text-label">Genre:</span><span className="text-content">{ movie?.Genre }</span></p>
        <p className="text-container"><span className="text-label">Language:</span><span className="text-content">{ movie?.Language }</span></p>
        <p className="text-container"><span className="text-label">Rated:</span><span className="text-content">{ movie?.Rated }</span></p>
        <p className="text-container"><span className="text-label">Run Time:</span><span className="text-content">{ movie?.Runtime }</span></p>
        <p className="text-container"><span className="text-label">Writer:</span><span className="text-content">{ movie?.Writer }</span></p>
        <p className="text-container"><span className="text-label">imdb Rating:</span><span className="text-content">{ movie?.imdbRating }</span></p>
        <p className="text-container"><span className="text-label">imdb Votes:</span><span className="text-content">{ movie?.imdbVotes }</span></p>
      </div>
    </div>
  )
}

export default MovieDetail;