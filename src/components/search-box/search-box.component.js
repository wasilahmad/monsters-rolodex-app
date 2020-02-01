import React from 'react';
import './search-box.component.css';

const SearchBox = ({placeholder, handleChange}) => {
    return (
        <div className="input-box">
          <input type="search" placeholder={placeholder} onChange={handleChange} />
        </div>
    );
}

export default SearchBox;
