import { useEffect, useState } from "react";
import './hangman.scss'
import { languages } from "./languages.js";
import { getFarewellText, getRandomWord } from "./utils.js";
import Confetti from "react-confetti";

export default function Hangman() {
  const [currentWord, setCurrentWord] = useState(() => getRandomWord())
  const [guessedLetters, setGuessedLetters] = useState([])

  const alphabet = "abcdefghijklmnopqrstuvwxyz"

  const wrongGuessCount = guessedLetters.filter(letter => !currentWord.includes(letter)).length

  const isGameLost = wrongGuessCount >= languages.length - 1
  const isGameWon = currentWord.split("").every(letter => guessedLetters.includes(letter))
  const isGameOver = isGameWon || isGameLost
  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1]
  const isLastGuessIncorrect = lastGuessedLetter && !currentWord.includes(lastGuessedLetter)

  function addGuessedLetter(letter) {
    setGuessedLetters(prev =>
        prev.includes(letter) ?
            prev :
            [...prev, letter]
    )
  }

  function resetGame() {
    setCurrentWord(getRandomWord())
    setGuessedLetters([])
  }

  useEffect(() => {
    document.title = 'Hangman'
  }, [])

  return (
      <main className='hangman'>
        {isGameWon && <Confetti/>}
        {/* Description */}
        <section className='description'>
          <h1 className='title'>Assembly: Endgame</h1>
          <div className='text'>
            Guess the word in under 8 attempts to keep the programming world safe from Assembly!
          </div>
        </section>
        {/* Status */}
        <section aria-live='polite' role='status' className='status'>
          {isGameWon && <div className='status-wrapper status-success'>
            <h2 className='status-title'>You win!</h2>
            <div className='status-description'>Well done! 🎉</div>
          </div>}
          {isGameLost && <div className='status-wrapper status-failure'>
            <h2 className='status-title'>Game over!</h2>
            <div className='status-description'>
              You lose! Better start learning Assembly 😭
            </div>
          </div>}
          {!isGameOver && isLastGuessIncorrect && <div className='status-wrapper status-warning'>
            <div className='status-info'>
              {getFarewellText(languages[wrongGuessCount - 1].name)}
            </div>
          </div>}
        </section>
        {/* Languages */}
        <section className='languages'>
          <div className='languages-wrapper'>
            {languages.map((lang, i) => (
                <div className={`language ${i < wrongGuessCount && 'lost'}`}
                     style={{backgroundColor: lang.backgroundColor, color: lang.color}}
                     key={lang.name}
                >
                  {lang.name}
                </div>
            ))}
          </div>
        </section>
        {/* Current word */}
        <section className='current-word'>
          <div className='current-word-wrapper'>
            {currentWord.split('').map((letter, i) => (
                <span key={i} className={`letter ${!guessedLetters.includes(letter) && isGameLost ? 'revealed' : ''}`}>
                  {guessedLetters.includes(letter) || isGameLost ? letter.toUpperCase() : ''}
                </span>
            ))}
          </div>
        </section>
        {/* Current status for screen readers */}
        <section
            className="sr-only"
            aria-live="polite"
            role="status"
        >
          <p>
            {currentWord.includes(lastGuessedLetter) ?
                `Correct! The letter ${lastGuessedLetter} is in the word.` :
                `Sorry, the letter ${lastGuessedLetter} is not in the word.`
            }
          </p>
          <p>
            You have {languages.length - 1 - wrongGuessCount} attempts left.
          </p>
          <p>Current word: {currentWord.split("").map(letter =>
              guessedLetters.includes(letter) ? letter + "." : "blank.").join(" ")}
          </p>
        </section>
        {/* Keyboard */}
        <section className='keyboard'>
          <div className='keyboard-wrapper'>
            {alphabet.split('').map((letter) => (
                <button
                    className={`letter-btn ${guessedLetters.includes(letter) && currentWord.includes(letter) ? 'correct' : ''} ${guessedLetters.includes(letter) && !currentWord.includes(letter) ? 'wrong' : ''}`}
                    onClick={() => addGuessedLetter(letter)}
                    disabled={guessedLetters.includes(letter) || isGameOver}
                    aria-disabled={guessedLetters.includes(letter) || isGameOver}
                    aria-label={'Letter ' + letter}
                    key={letter}
                >
                  {letter.toUpperCase()}
                </button>
            ))}
          </div>
        </section>
        {isGameOver && <button
            onClick={resetGame}
            className="new-game"
            aria-label='Start a new game'
        >New Game</button>}
      </main>
  )
}
