import './atomicBlog.scss';
import { faker } from "@faker-js/faker";
import Header from "./components/Header.jsx";
import { useEffect, useState } from "react";
import Main from "./components/Main.jsx";
import Archive from "./components/Archive.jsx";
import Footer from "./components/Footer.jsx";
import PostContext from "./PostContext.jsx";

function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

export default function AtomicBlog() {
  const [posts, setPosts] = useState(() =>
      Array.from({length: 30}, () => createRandomPost())
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [isFakeDark, setIsFakeDark] = useState(false);

  // Derived state. These are the posts that will actually be displayed
  const searchedPosts =
      searchQuery.length > 0
          ? posts.filter((post) =>
              `${post.title} ${post.body}`
                  .toLowerCase()
                  .includes(searchQuery.toLowerCase())
          )
          : posts;

  function handleAddPost(post) {
    setPosts((posts) => [post, ...posts]);
  }

  function handleClearPosts() {
    setPosts([]);
  }

  useEffect(() => {
    document.title = 'The Atomic Blog'
  }, [])

  return (
      <PostContext.Provider
          value={{
            posts: searchedPosts,
            onAddPost: handleAddPost,
            onClearPosts: handleClearPosts,
            searchQuery,
            setSearchQuery
          }}
      >
        <div className={`atomic-blog-page ${isFakeDark ? 'fake-dark-mode' : ''}`}>
          <button
              onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
              className="btn-fake-dark-mode"
          >
            {isFakeDark ? "☀️" : "🌙"}
          </button>
          <Header />
          <Main />
          <Archive createRandomPost={createRandomPost}/>
          <Footer/>
        </div>
      </PostContext.Provider>
  )
}
