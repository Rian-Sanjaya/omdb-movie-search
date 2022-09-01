import { useState, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';
import { titleChanged, fetchMovies } from '../../store/movie';
import { Form } from 'react-bootstrap';

function InputSearch() {
  const [searchInput, setSearchInput] = useState('');
  const dispatch = useDispatch();

  const debounceFetchData = useMemo(() => {
    return debounce(handleInputChange, 1000)
  }, []);


  useEffect(() => {
    dispatch(titleChanged(searchInput));
    dispatch(fetchMovies(searchInput));

    return () => {
      debounceFetchData.cancel();
    }
  }, [searchInput, dispatch, debounceFetchData])

  function handleInputChange(e) {
    setSearchInput(e.target.value);
  }

  return (
    <div className="search-input-container">
      <Form.Control 
        type="text" 
        placeholder="Enter movie title here..." 
        onChange={debounceFetchData}
      />
    </div>
  );
}

export default InputSearch;