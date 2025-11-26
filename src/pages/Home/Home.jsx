import { NavLink } from 'react-router-dom';
import './home.scss';

export default function Home() {
  return (
      <header className={'header container'}>
        <nav>
          <ul>
            <li>
              <NavLink to="/react-facts" end>React Facts</NavLink>
            </li>
            <li>
              <NavLink to="/travel-journal" end>Travel Journal</NavLink>
            </li>
            <li>
              <NavLink to="/chef-claude" end>Chef Claude</NavLink>
            </li>
            <li>
              <NavLink to="/meme-generator" end>Meme Generator</NavLink>
            </li>
            <li>
              <NavLink to="/tenzies" end>Tenzies</NavLink>
            </li>
            <li>
              <NavLink to="/hangman" end>Hangman</NavLink>
            </li>
            <li>
              <NavLink to="/memory-game" end>Memory Game</NavLink>
            </li>
            <li>
              <NavLink to="/pizza-menu" end>Pizza Menu</NavLink>
            </li>
            <li>
              <NavLink to="/travel-list" end>Travel List</NavLink>
            </li>
            <li>
              <NavLink to="/eat-n-split" end>Eat-'N-Split</NavLink>
            </li>
            <li>
              <NavLink to="/usepopcorn" end>usePopcorn</NavLink>
            </li>
          </ul>
        </nav>
      </header>
  )
}
