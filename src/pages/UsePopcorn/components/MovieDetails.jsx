import StarRating from "./StarRating";

export default function MovieDetails({movies, selectedId, setSelectedId}) {
  const selectedMovie = movies.filter(movie => movie.imdbID === selectedId)
  const {Title, Poster, Year, Runtime, genres, imdbRating, description} = selectedMovie[0]

  return (
      <div className='movie-details'>
        <button
            className='close-details-btn'
            aria-label='Close the movie details'
            onClick={() => setSelectedId(null)}
        >&larr;
        </button>
        <div className='movie-details-top'>
          <img src={Poster} alt={Title}/>
          <div className='movie-details-info'>
            <h2>{Title}</h2>
            <div className='one-line'>
              <div className='info-item'>{Year}</div>
              <div className='info-item'>{Runtime} min</div>
            </div>
            <div className='info-item'>{genres && genres.join(', ')}</div>
            <div className='info-item'>⭐ {imdbRating} IMDb rating</div>
          </div>
        </div>
        <div className='movie-details-bottom'>
          <StarRating/>
          <div className='description'>{description}</div>
        </div>
      </div>
  )
}
