export default function WatchedMovieSummary({movies}) {
  const moviesTotal = movies.length
  const avgImbdRating = moviesTotal ? movies.reduce((acc, movie) => movie.imdbRating + acc, 0 ) / moviesTotal : 0
  const avgUserRating = moviesTotal ? movies.reduce((acc, movie) => movie.userRating + acc, 0 ) / moviesTotal : 0
  const avgRuntime = moviesTotal ? movies.reduce((acc, movie) => movie.Runtime + acc, 0 ) / moviesTotal : 0

  return (
      <div className='watched-movie-summary'>
        <h2>Movies you watched</h2>
        <div className='watched-data'>
          <span>🔃 {moviesTotal} movies</span>
          <span>⭐ {avgImbdRating % 1 !== 0 ? avgImbdRating.toFixed(1) : avgImbdRating}</span>
          <span>🌟 {avgUserRating % 1 !== 0 ? avgUserRating.toFixed(1) : avgUserRating}</span>
          <span>⌛ {avgRuntime % 1 !== 0 ? avgRuntime.toFixed(1) : avgRuntime} min</span>
        </div>
      </div>
  )
}
