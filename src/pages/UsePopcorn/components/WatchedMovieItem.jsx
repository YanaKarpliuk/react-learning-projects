export default function WatchedMovieItem({id, title, poster, runtime, useRating, imdbRating, removeWatchedMovie}) {
  return (
      <li className='movie-item'>
        <img src={poster} alt={title}/>
        <div className='movie-item-info'>
          <h3>{title}</h3>
          <div className='additional-info'>
            <span>⭐ {imdbRating}</span>
            <span>🌟 {useRating}</span>
            <span>⌛ {runtime}</span>
          </div>
        </div>
        <button
            className='remove-movie-btn'
            aria-label='Remove the movie from the watched list'
            onClick={() => removeWatchedMovie(id)}
        >❌</button>
      </li>
  )
}
