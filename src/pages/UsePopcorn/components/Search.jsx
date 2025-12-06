import { useEffect, useRef } from "react";

export default function Search({setSearchQuery, searchQuery}) {
  const searchRef = useRef(null)

  useEffect(() => {
    searchRef.current.focus()

    function callback (e) {
      if (e.code === 'Enter') searchRef.current.focus()
    }

    document.addEventListener('keydown', callback)

    return function() {
      document.removeEventListener('keydown', callback)
    }
  }, [])

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
