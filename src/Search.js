import React from 'react';

const Search = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className='search'>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Search Items:</label>
        <input 
          type="text" 
          className="input"
          placeholder="Search list name" 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} 
        />
        
      </form>
    </div>
  );
}

export default Search;
