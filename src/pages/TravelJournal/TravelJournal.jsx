import data from './data.js';
import globeLogo from './assets/Globe.svg';
import pinIcon from './assets/pin.svg';
import './travelJournal.scss';
import { useEffect } from "react";

function Entry({img, title, country, googleMapsLink, dates, text}) {
  useEffect(() => {
    document.title = 'My Travel Journal'

    return function () {
      document.title = 'My React Journey'
    }
  }, [])

  return (
      <article className="journal-entry">
        <div className="main-image-container">
          <img
              className="main-image"
              src={img.src}
              alt={img.alt}
          />
        </div>
        <div className="info-container">
          <div className={'info-top'}>
            <img
                className="marker"
                src={pinIcon}
                alt="map marker icon"
            />
            <span className="country">{country}</span>
            <a href={googleMapsLink}>View on Google Maps</a>
          </div>
          <h1 className="entry-title">{title}</h1>
          <p className="trip-dates">{dates}</p>
          <p className="entry-text">{text}</p>
        </div>
      </article>
  )
}

export default function TravelJournal() {
  return (
      <div className={'travel-page'}>
        <header className={'travel-header'}>
          <img src={globeLogo} alt={'Globe logo'}/>
          <div>my travel journal.</div>
        </header>
        <main className={'travel-main'}>
          {data.map((entry) => {
            return (
                <Entry
                    key={entry.id}
                    {...entry}
                />
            )
          })}
        </main>
      </div>
  )
}
