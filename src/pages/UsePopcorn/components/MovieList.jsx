import MovieItem from "./MovieItem.jsx";

export default function MovieList({movies, isWatched, setSelectedId}) {
  function selectMovie(id) {
    setSelectedId(id)
  }

  return (
      <div className='movies-list-wrapper'>
        <h2 className='sr-only'>{isWatched && 'Watched'} Movie List</h2>
        <ul className='movies-list'>
          {movies.map((item) => (
              <button key={item.imdbID} onClick={() => selectMovie(item.imdbID)} className='movie-btn'>
                <MovieItem
                    title={item.Title}
                    year={item.Year}
                    poster={item.Poster}
                    runtime={item.Runtime}
                    imdbRating={item.imdbRating}
                    useRating={item.userRating}
                    isWatched={isWatched}
                />
              </button>
          ))}
        </ul>
      </div>
  )
}
