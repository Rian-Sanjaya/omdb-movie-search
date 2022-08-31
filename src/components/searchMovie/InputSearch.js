import { useSelector, useDispatch } from 'react-redux';
import { getTitle, titleChanged, fetchMovies } from '../../store/movie';
import { Form } from 'react-bootstrap';

function InputSearch() {
  const dispatch = useDispatch();
  const title = useSelector(getTitle);

  function handleInputChange(e) {
    dispatch(titleChanged(e.target.value));
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      dispatch(fetchMovies(title));
    }
  }

  return (
    <div className="search-input-container">
      <Form.Control 
        type="text" 
        placeholder="Enter movie title here..." 
        value={title} 
        onChange={handleInputChange} 
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default InputSearch;