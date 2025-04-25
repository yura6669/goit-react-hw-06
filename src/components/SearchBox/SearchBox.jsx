import { useId } from "react";
import css from './SearchBox.module.css';

const SearchBox = ({query, onSearch}) => {
    const searchId = useId();
  return (
      <div className={css.container}>
        <label htmlFor={searchId}>Find contacts by name</label>
          <input type="text" name="search" id={searchId} placeholder="Search" value={query}
        onChange={(evt) => onSearch(evt.target.value)} />
     </div>
  )
}

export default SearchBox