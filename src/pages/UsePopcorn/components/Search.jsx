import { useRef } from "react";
import { useKey } from "../hooks/useKey.js";

export default function Search({setSearchQuery, searchQuery}) {
  const searchRef = useRef(null)

  useKey('Enter', handleFocus)

  function handleFocus() {
    searchRef.current.focus()
  }

  return (
      <div className='search-wrapper'>
        <label htmlFor='search' className='sr-only'>Search</label>
        <input
            id='search'
            placeholder='Search movies...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            ref={searchRef}
        />
      </div>
  )
}
