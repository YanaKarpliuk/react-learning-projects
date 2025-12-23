import PostContext from "../PostContext.jsx";
import { useContext } from "react";

export default function Search() {
  const {searchQuery, setSearchQuery} = useContext(PostContext)

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
