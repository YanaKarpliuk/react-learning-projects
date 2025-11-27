export default function WatchedMovieSummary({movies}) {
  const moviesTotal = movies.length
  const avgImbdRating = movies.reduce((acc, movie) => movie.imdbRating + acc, 0 ) / moviesTotal
  const avgUserRating = movies.reduce((acc, movie) => movie.userRating + acc, 0 ) / moviesTotal
  const avgRuntime = movies.reduce((acc, movie) => movie.runtime + acc, 0 ) / moviesTotal

  return (
      <div className='watched-movie-summary'>
        <h2>Movies you watched</h2>
        <div className='watched-data'>
          <span>🔃 {moviesTotal} movies</span>
          <span>⭐ {avgImbdRating}</span>
          <span>🌟 {avgUserRating}</span>
          <span>⌛ {avgRuntime}</span>
        </div>
      </div>
  )
}
