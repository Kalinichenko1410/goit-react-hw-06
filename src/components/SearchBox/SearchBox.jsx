import s from './SearchBox.module.css';

const SearchBox = ({ value, onSearch }) => {
  return (
    <div className={s.searchContainer}>
      <p>Find contacts by name</p>
      <input
        className={s.searchField}
        type="text"
        value={value}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;