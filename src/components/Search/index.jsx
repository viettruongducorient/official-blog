import React from "react";

const Search = () => {
  return(
    <div className="input-group rounded">
      <div className="form-outline">
        <input type="search" id="form1" className="form-control" />
        <label className="form-label" htmlFor="form1">Search</label>
      </div>
      <span type="button" className="input-group-text border-0">
        {/* <i className="far fa-search"></i> */}
      </span>
    </div>
  )
}

export default Search;