import React from 'react'
import { useGlobalContext } from "./context";

const Search = () => {
  const {query, setQuery, setPage} = useGlobalContext();

  const handleSearch = (e) => {
    setQuery(e.target.value)
    setPage(1);
  }

  return (
    <form className="ms-auto" action='#' onSubmit={(e) => e.preventDefault()}>
      <input
        className="form-control form-control-sm me-2"
        type="search"
        placeholder="Search movies"
        aria-label="SearchMovies"
        value={query}
        onChange={(e) => handleSearch(e)}
      />
    </form>
  )
}

export default Search;