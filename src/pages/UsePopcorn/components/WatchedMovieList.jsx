import MovieList from "./MovieList.jsx";

export default function WatchedMovieList({movies}) {
  return (
      <div className='watched-movies-wrapper'>
        <div className='watched-movie-summary'>
          <h2>Movies you watched</h2>
          <div className='watched-data'>
            <span>🔃 {movies.length} movies</span>
            <span>⭐ {movies.reduce((acc, movie) => movie.imdbRating + acc, 0 ) / movies.length}</span>
            <span>🌟 {movies.reduce((acc, movie) => movie.userRating + acc, 0 ) / movies.length}</span>
            <span>⌛ {movies.reduce((acc, movie) => movie.runtime + acc, 0 ) / movies.length}</span>
          </div>
        </div>
        <MovieList movies={movies} isWatched={true}/>
      </div>
  )
}
