import React, { Component } from 'react'
import './search-box.style.css';
export class SearchBox extends Component {
  render() {
      const {searchField, onChangeHandler, placeholder, className } = this.props;
    return (
      <div>
          <input
          placeholder={placeholder}
          type="search"
          className={`search-box ${className}`}
          value={searchField}
          onChange={onChangeHandler}
        />
      </div>
    )
  }
}

export default SearchBox