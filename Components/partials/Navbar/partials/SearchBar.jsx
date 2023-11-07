import React from "react";

const SearchBar = () => {
  return (
    <form className="input-group d-sm-flex mx-md-4 mx-1">
      <input
        autoComplete="off"
        type="search"
        className="search form-control rounded px-3"
        placeholder="Search"
        onInput={(e) => console.log(e.target.value)}
      />
      <span className="input-group-text border-0 d-lg-flex">
        <i className="fas fa-search"></i>
      </span>
    </form>
  );
};

export default SearchBar;
