export default function Search({setSearchQuery, searchQuery}) {
  return (
      <div className='search-wrapper'>
        <label htmlFor='search' className='sr-only'>Search</label>
        <input
            id='search'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search posts..."
        />
      </div>
  )
}
