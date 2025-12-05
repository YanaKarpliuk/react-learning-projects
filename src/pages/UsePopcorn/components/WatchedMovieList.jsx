import WatchedMovieItem from "./WatchedMovieItem.jsx";

export default function WatchedMovieList({movies, removeWatchedMovie}) {
  return (
      <div className='movies-list-wrapper'>
        <h2 className='sr-only'>Watched Movie List</h2>
        <ul className='movies-list'>
          {movies.map((item) => (
              <WatchedMovieItem
                  key={item.imdbID}
                  id={item.imdbID}
                  title={item.Title}
                  poster={item.Poster}
                  runtime={item.Runtime}
                  imdbRating={item.imdbRating}
                  useRating={item.userRating}
                  removeWatchedMovie={removeWatchedMovie}
              />
          ))}
        </ul>
      </div>
  )
}
