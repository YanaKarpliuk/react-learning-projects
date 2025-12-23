import './atomicBlog.scss';
import Header from "./components/Header.jsx";
import { useEffect, useState } from "react";
import Main from "./components/Main.jsx";
import Archive from "./components/Archive.jsx";
import Footer from "./components/Footer.jsx";
import { PostProvider } from "./PostContext.jsx";

export default function AtomicBlog() {
  const [isFakeDark, setIsFakeDark] = useState(false);

  useEffect(() => {
    document.title = 'The Atomic Blog'
  }, [])

  return (
      <div className={`atomic-blog-page ${isFakeDark ? 'fake-dark-mode' : ''}`}>
        <button
            onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
            className="btn-fake-dark-mode"
        >
          {isFakeDark ? "☀️" : "🌙"}
        </button>
        <PostProvider>
          <Header/>
          <Main/>
          <Archive/>
          <Footer/>
        </PostProvider>
      </div>
  )
}
