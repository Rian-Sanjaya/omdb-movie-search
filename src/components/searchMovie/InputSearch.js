import { useState, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';
import { titleChanged, fetchMovies } from '../../store/movie';
import { Form } from 'react-bootstrap';

function InputSearch() {
  const [searchInput, setSearchInput] = useState('');
  const [searchFocus, setSearchFocus] = useState(false);
  const dispatch = useDispatch();

  const debounceFetchData = useMemo(() => {
    return debounce(handleInputChange, 700)
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
    <div className="search-input-container" style={{ position: 'relative' }}>
      <div class={`search-icon-container ${searchFocus ? 'focused' : ''}`} style={{ position: 'absolute', top: '14px', left: '27px' }}>
        <div id="wrapper">
          <div id="circle"></div>
          <div id="bar"></div>
        </div>
      </div>
      <Form.Control 
        type="text" 
        placeholder="Enter movie title here..." 
        onChange={debounceFetchData}
        onFocus={() => setSearchFocus(true)}
        onBlur={() => setSearchFocus(false)}
        style={{ paddingLeft: '35px' }}
      />
    </div>
  );
}

export default InputSearch;