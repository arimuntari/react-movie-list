import React from 'react';

const Search = (props) => (
    <div className="form-icon">
        <i className="fa fa-search"></i>
	    <input name="search" onKeyUp={props.handleKeyUp} placeholder="Search" className="form-control form-search"/>
    </div>
)

export default Search;