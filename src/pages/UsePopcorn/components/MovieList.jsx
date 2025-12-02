import MovieItem from "./MovieItem.jsx";

export default function MovieList({movies, isWatched}) {
  return (
      <div className='movies-list-wrapper'>
        <h2 className='sr-only'>{isWatched && 'Watched'} Movie List</h2>
        <ul className='movies-list'>
          {movies.map((item) => (
              <MovieItem
                  key={item.imdbID}
                  title={item.Title}
                  year={item.Year}
                  poster={item.Poster}
                  runtime={item.Runtime}
                  imdbRating={item.imdbRating}
                  useRating={item.userRating}
                  isWatched={isWatched}
              />
          ))}
        </ul>
      </div>
  )
}
