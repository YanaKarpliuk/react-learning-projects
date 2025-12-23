import Results from "./Results.jsx";
import Search from "./Search.jsx";
import PostContext from "../PostContext.jsx";
import { useContext } from "react";

export default function Header() {
  const {onClearPosts} = useContext(PostContext)

  return (
      <header className='header'>
        <h1>⚛️ The Atomic Blog</h1>
        <div className='header-actions'>
          <Results />
          <Search />
          <button onClick={onClearPosts}>Clear posts</button>
        </div>
      </header>
  )
}
