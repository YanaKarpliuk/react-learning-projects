import './home.scss';
import { useEffect } from "react";
import NavItem from "./components/NavItem";

export default function Home() {
  const navItems = [
    { link: 'react-facts', name: 'React Facts' },
    { link: 'travel-journal', name: 'Travel Journal' },
    { link: 'chef-claude', name: 'Chef Claude' },
    { link: 'meme-generator', name: 'Meme Generator' },
    { link: 'tenzies', name: 'Tenzies' },
    { link: 'hangman', name: 'Hangman' },
    { link: 'memory-game', name: 'Memory Game' },
    { link: 'pizza-menu', name: 'Pizza Menu' },
    { link: 'travel-list', name: 'Travel List' },
    { link: 'eat-n-split', name: "Eat-'N-Split" },
    { link: 'usepopcorn', name: 'usePopcorn' },
    { link: 'date-counter', name: 'Date Counter (useReducer practice)' },
    { link: 'react-quiz', name: 'React Quiz' },
    { link: 'workout-timer', name: 'Workout Timer' },
    { link: 'redux-intro', name: 'Redux Intro' },
    { link: 'redux-toolkit-intro', name: 'Redux Toolkit Intro' },
  ]

  useEffect(() => {
    document.title = 'My React Journey'
  }, [])

  return (
      <header className={'header container'}>
        <nav>
          <ul>
            {navItems.map(({ link, name }) => (
                <NavItem key={link} link={link} name={name}/>
            ))}
          </ul>
        </nav>
      </header>
  )
}
