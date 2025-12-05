import MovieItem from "./MovieItem.jsx";

export default function MovieList({movies, selectMovie}) {
  return (
      <div className='movies-list-wrapper'>
        <h2 className='sr-only'>Movie List</h2>
        <ul className='movies-list'>
          {movies.map((item) => (
              <MovieItem
                  key={item.imdbID}
                  id={item.imdbID}
                  title={item.Title}
                  year={item.Year}
                  poster={item.Poster}
                  selectMovie={selectMovie}
              />
          ))}
        </ul>
      </div>
  )
}
