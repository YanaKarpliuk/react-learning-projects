import Results from "./Results.jsx";
import Search from "./Search.jsx";

export default function Header({posts, onClearPosts, searchQuery, setSearchQuery}) {
  return (
      <header className='header'>
        <h1>⚛️ The Atomic Blog</h1>
        <div className='header-actions'>
          <Results posts={posts} />
          <Search
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
          />
          <button onClick={onClearPosts}>Clear posts</button>
        </div>
      </header>
  )
}
