export default function MovieItem({id, title, poster, year, selectMovie}) {
  return (
      <li className='movie-item listed-movie-item'>
        <img src={poster} alt={title}/>
        <div className='movie-item-info'>
          <h3>{title}</h3>
          <div className='additional-info'>
            <span>📅 {year}</span>
          </div>
        </div>
        <button
            className='select-movie-btn'
            aria-label='Select the movie'
            onClick={() => selectMovie(id)}
        >Select
        </button>
      </li>
  )
}
