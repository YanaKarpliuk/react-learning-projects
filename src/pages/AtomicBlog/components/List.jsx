import { usePosts } from "../PostContext.jsx";

export default function List() {
  const {posts} = usePosts()

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
