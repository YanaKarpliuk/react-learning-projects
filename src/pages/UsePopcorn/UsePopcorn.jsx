import './usePopcorn.scss';
import Header from "./components/layouts/Header.jsx";
import MovieList from "./components/MovieList.jsx";
import WatchedMovieSummary from "./components/WatchedMovieSummary.jsx";
import Column from "./components/layouts/Column.jsx";
import { useEffect, useState } from "react";
import Search from "./components/Search.jsx";
import FoundResults from "./components/FoundResults.jsx";
import Logo from "./components/Logo";
import Main from "./components/layouts/Main.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import ErrorText from "./components/ErrorText.jsx";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    title: "Inception",
    year: "2010",
    poster:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    title: "The Matrix",
    year: "1999",
    poster:
        "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    title: "Parasite",
    year: "2019",
    poster:
        "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    title: "Inception",
    year: "2010",
    poster:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    title: "Back to the Future",
    year: "1985",
    poster:
        "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

const KEY = import.meta.env.VITE_OMBD_API_KEY

export default function UsePopcorn() {
  const [movies, setMovies] = useState(tempMovieData)
  const [watchedMovies, setWatchedMovies] = useState(tempWatchedData)
  const [searchQuery, setSearchQuery] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true)
        setError('')
        const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${searchQuery}`)
        if (!res.ok) throw new Error("Something went wrong with fetching movies")

        const data = await res.json()
        if (data.Response === 'False') throw new Error("Movie not found")

        setMovies(data.Search)
        setIsLoading(false)
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    if(searchQuery.length < 3) {
      setMovies([])
      setError('')
      return
    }

    fetchMovies()
  }, [searchQuery])

  return (
      <div className={'usepopcorn-page'}>
        <Header>
          <Logo/>
          <Search
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
          />
          <FoundResults results={movies.length}/>
        </Header>
        <Main>
          <Column>
            {isLoading && <Loader local={true}/>}
            {!isLoading && !error && <MovieList movies={movies}/>}
            {error && <ErrorText message={error}/>}
          </Column>
          <Column>
            <WatchedMovieSummary movies={watchedMovies}/>
            <MovieList movies={watchedMovies} isWatched={true}/>
          </Column>
        </Main>
      </div>
  )
}
