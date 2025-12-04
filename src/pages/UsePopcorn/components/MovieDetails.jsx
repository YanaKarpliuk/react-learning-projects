import StarRating from "./StarRating";
import { useEffect, useState } from "react";
import Loader from "../../../components/Loader/Loader.jsx";
import ErrorText from "./ErrorText.jsx";

export default function MovieDetails({selectedId, setSelectedId, movieKey}) {
  const [selectedMovie, setSelectedMovie] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const {
    Title: title,
    Poster: poster,
    Released: released,
    Runtime: runtime,
    Genre: genre,
    imdbRating,
    Plot: plot,
    Actors: actors,
    Director: director
  } = selectedMovie

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        setIsLoading(true)
        setError('')
        const res = await fetch(`http://www.omdbapi.com/?apikey=${movieKey}&i=${selectedId}`)
        if (!res.ok) throw new Error("Something went wrong with fetching movies")

        const data = await res.json()
        if (data.Response === 'False') throw new Error("Movie not found")

        setSelectedMovie(data)
        setIsLoading(false)
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchMovieDetails()
  }, [selectedId])

  return (
      <div className='movie-details'>
        <button
            className='close-details-btn'
            aria-label='Close the movie details'
            onClick={() => setSelectedId(null)}
        >&larr;
        </button>
        {isLoading && <Loader local={true}/>}
        {!isLoading && !error &&
            <>
              <div className='movie-details-top'>
                <img src={poster} alt={title}/>
                <div className='movie-details-info'>
                  <h2>{title}</h2>
                  <div className='one-line'>
                    <div className='info-item'>{released}</div>
                    <div className='info-item'>{runtime}</div>
                  </div>
                  <div className='info-item'>{genre}</div>
                  <div className='info-item'>⭐ {imdbRating} IMDb rating</div>
                </div>
              </div>
              <div className='movie-details-bottom'>
                <StarRating/>
                <div className='description'>
                  <p>{plot}</p>
                  <p>Starring {actors}</p>
                  <p>Directed by {director}</p>
                </div>
              </div>
            </>}
        {error && <ErrorText message={error}/>}
      </div>
  )
}
