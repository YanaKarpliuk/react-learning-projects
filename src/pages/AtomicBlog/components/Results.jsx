import PostContext from "../PostContext.jsx";
import { useContext } from "react";

export default function Results() {
  const {posts} = useContext(PostContext)

  return <p>🚀 {posts.length} atomic posts found</p>
}
