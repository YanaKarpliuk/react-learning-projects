export default function List({posts}) {
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
