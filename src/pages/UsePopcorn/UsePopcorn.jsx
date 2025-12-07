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
import { useMovies } from "./hooks/useMovies.js";
import { useLocalStorageState } from "./hooks/useLocalStorageState.js";

const KEY = import.meta.env.VITE_OMBD_API_KEY

export default function UsePopcorn() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedId, setSelectedId] = useState(null)

  const {movies, error, isLoading} = useMovies(searchQuery, deselectMovie)
  const [watchedMovies, setWatchedMovies] = useLocalStorageState([], 'watched')

  function selectMovie(id) {
    setSelectedId(id)
  }

  function deselectMovie() {
    if (selectedId) setSelectedId(null)
  }

  function addWatchedMovie(movie) {
    setWatchedMovies(prev => [...prev, movie])
  }

  function removeWatchedMovie(id) {
    setWatchedMovies(prev => prev.filter(movie => movie.imdbID !== id))
  }

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
                    addWatchedMovie={addWatchedMovie}
                    watchedMovies={watchedMovies}
                    deselectMovie={deselectMovie}
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
