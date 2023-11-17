import React from 'react'

const SearchItem = ({search,setsearch}) => {
  return (
    <form className='searchForm' onSubmit={(e)=>{e.preventDefault()}}>
       <input
         id='search'
         type='text'
         role="searchbox"
         placeholder='search Items' 
         value={search}
         onChange={(e)=> setsearch(e.target.value)}


        />
    </form>
  )
}

export default SearchItem