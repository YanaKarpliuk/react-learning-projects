import { useState } from "react";
import { usePosts } from "../PostContext.jsx";

export default function FormAddPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const {onAddPost} = usePosts()

  const handleSubmit = function (e) {
    e.preventDefault();
    if (!body || !title) return;
    onAddPost({ title, body });
    setTitle("");
    setBody("");
  };

  return (
      <form onSubmit={handleSubmit}>
        <label htmlFor='post-title' className='sr-only'>Post title</label>
        <input
            id='post-title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Post title"
        />
        <label htmlFor='post-body' className='sr-only'>Post body</label>
        <textarea
            id='post-body'
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Post body"
            rows={2}
        />
        <button>Add post</button>
      </form>
  )
}
