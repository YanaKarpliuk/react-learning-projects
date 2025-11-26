export default function MovieItem({title, poster, year, runtime, useRating, imdbRating, isWatched}) {
  return (
      <li className='movie-item'>
        <img src={poster} alt={title}/>
        <div className='movie-item-info'>
          <h3>{title}</h3>
          <div className='additional-info'>
            {isWatched
                ? (<>
                      <span>⭐ {imdbRating}</span>
                      <span>🌟 {useRating}</span>
                      <span>⌛ {runtime}</span>
                    </>)
                : <span>📅 {year}</span>
            }
          </div>
        </div>
      </li>
  )
}
