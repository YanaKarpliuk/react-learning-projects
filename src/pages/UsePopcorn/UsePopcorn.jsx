import './usePopcorn.scss';
import Header from "./components/layouts/Header.jsx";
import MovieList from "./components/MovieList.jsx";
import WatchedMovieList from "./components/WatchedMovieList.jsx";
import WatchedMovieSummary from "./components/WatchedMovieSummary.jsx";
import Column from "./components/layouts/Column.jsx";
import { useEffect, useState } from "react";
import Search from "./components/Search.jsx";
import FoundResults from "./components/FoundResults.jsx";
import Logo from "./components/Logo";
import Main from "./components/layouts/Main.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import ErrorText from "./components/ErrorText.jsx";
import MovieDetails from "./components/MovieDetails";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
        "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
        "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    Runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
        "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    Runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

const KEY = import.meta.env.VITE_OMBD_API_KEY

export default function UsePopcorn() {
  const [movies, setMovies] = useState(tempMovieData)
  const [watchedMovies, setWatchedMovies] = useState([])
  const [searchQuery, setSearchQuery] = useState('interstellar')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [selectedId, setSelectedId] = useState(null)

  function selectMovie(id) {
    setSelectedId(id)
  }

  function addWatchedMovie(movie) {
    setWatchedMovies(prev => [...prev, movie])
  }

  function removeWatchedMovie(id) {
    setWatchedMovies(prev => prev.filter(movie => movie.imdbID !== id))
  }

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

    if (searchQuery.length < 3) {
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
            {!isLoading && !error &&
                <MovieList movies={movies} selectMovie={selectMovie}/>}
            {error && <ErrorText message={error}/>}
          </Column>
          <Column>
            {selectedId
                ? <MovieDetails
                    movieKey={KEY}
                    selectedId={selectedId}
                    setSelectedId={setSelectedId}
                    addWatchedMovie={addWatchedMovie}
                    watchedMovies={watchedMovies}
                />
                : <>
                  <WatchedMovieSummary movies={watchedMovies}/>
                  <WatchedMovieList movies={watchedMovies} removeWatchedMovie={removeWatchedMovie}/>
                </>
            }
          </Column>
        </Main>
      </div>
  )
}
