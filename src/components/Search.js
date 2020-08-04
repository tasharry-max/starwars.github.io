import React from 'react';

const Search = (props) => {
   return (
           <input 
            type="text"
            placeholder="Search"
            onChange={(e) => props.onChange(e.target.value.toLowerCase())}
           />
   
   ) 
}

export default Search;