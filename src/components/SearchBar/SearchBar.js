import React from 'react';

const SearchBar = () => (
  <form action="/search">
    <input name="keyword" type="text" />
    <button type="submit">Send</button>
  </form>
);

export default SearchBar;
