import MovieItem from "./MovieItem.jsx";
import ToggleBtn from "./ToggleBtn.jsx";
import { useState } from "react";

export default function MovieList({movies, isWatched}) {
  const [isListOpen, setIsListOpen] = useState(true)
  function toggleListVisibility() {
    setIsListOpen(prev => !prev)
  }

  return (
      <div className='movies-list-wrapper'>
        <h2 className='sr-only'>Movie list</h2>
        <ToggleBtn
            onClick={toggleListVisibility}
            isOpen={isListOpen}
            listName={'movies list'}
        />
        {isListOpen &&
            <ul className='movies-list'>
              {movies.map((item) => (
                  <MovieItem
                      key={item.imdbID}
                      title={item.title}
                      year={item.year}
                      poster={item.poster}
                      runtime={item.runtime}
                      imdbRating={item.imdbRating}
                      useRating={item.userRating}
                      isWatched={isWatched}
                  />
              ))}
            </ul>
        }
      </div>
  )
}
