import { useId } from "react";
import css from './SearchBox.module.css';
import { useSelector, useDispatch } from "react-redux";

const SearchBox = () => {
  const searchId = useId();
  const query = useSelector(state => state.filter.name);
  const dispatch = useDispatch();
  const onSearch = (query) => { 
    dispatch({ type: 'filter/changeFilter', payload: query });
  };
  return (
      <div className={css.container}>
        <label htmlFor={searchId}>Find contacts by name</label>
          <input type="text" name="search" id={searchId} placeholder="Search" value={query}
        onChange={(evt) => onSearch(evt.target.value)} />
     </div>
  )
}

export default SearchBox