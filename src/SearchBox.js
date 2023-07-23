import React from 'react';

const SearchBox =({searchfield, searchChange}) => {
  return (
    <div className= 'pa2 '>
    <input
    className='w-90 pa3 ba br3 shadow-5 ' 
    type='search' 
    placeholder ='Search Destinations'
    onChange ={searchChange} 
    />
    </div>
  );

}

export default SearchBox;