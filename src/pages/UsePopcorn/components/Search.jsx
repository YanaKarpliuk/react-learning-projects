export default function Search({setSearchQuery, searchQuery}) {
  return (
      <div className='search-wrapper'>
        <label htmlFor='search' className='sr-only'>Search</label>
        <input
            id='search'
            placeholder='Search movies...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
  )
}
