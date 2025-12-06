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

const KEY = import.meta.env.VITE_OMBD_API_KEY

export default function UsePopcorn() {
  const [movies, setMovies] = useState([])
  const [watchedMovies, setWatchedMovies] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
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
    const controller = new AbortController()

    async function fetchMovies() {
      try {
        setIsLoading(true)
        setError('')
        const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${searchQuery}`, {signal: controller.signal})
        if (!res.ok) throw new Error("Something went wrong with fetching movies")

        const data = await res.json()
        if (data.Response === 'False') throw new Error("Movie not found")

        setMovies(data.Search)
        setError('')
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message)
        }
      } finally {
        setIsLoading(false)
      }
    }

    if (searchQuery.length < 3) {
      setMovies([])
      setError('')
      return
    }

    if (selectedId) setSelectedId(null)
    fetchMovies()

    // Each time we type a letter, a request is sent to API
    // This will make sure that only the last request returns a response
    return function () {
      controller.abort()
    }
  }, [searchQuery])

  useEffect(() => {
    document.title = 'usePopcorn'

    return function () {
      document.title = 'My React Journey'
    }
  }, [])

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
