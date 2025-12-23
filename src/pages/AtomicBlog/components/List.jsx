import PostContext from "../PostContext.jsx";
import { useContext } from "react";

export default function List() {
  const {posts} = useContext(PostContext)

  return (
      <ul className='list'>
        {posts.map((post, i) => (
            <li key={i}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
        ))}
      </ul>
  )
}
