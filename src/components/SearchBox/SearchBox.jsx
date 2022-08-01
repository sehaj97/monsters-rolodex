const SearchBox = ({ handleChange }) => (
  <input
    className="search-box"
    type="search"
    placeholder="search monsters"
    onChange={handleChange}
  />
);
export default SearchBox;
