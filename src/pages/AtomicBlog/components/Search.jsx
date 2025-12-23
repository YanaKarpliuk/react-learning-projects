import { usePosts } from "../PostContext.jsx";

export default function Search() {
  const {searchQuery, setSearchQuery} = usePosts()

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
