import { useEffect, useRef, useState } from "react";
import { nanoid } from "nanoid"
import Confetti from 'react-confetti'
import './tenzies.scss'
import Die from './components/Die.jsx'

export default function Tenzies() {
  // () => fn <- calls the function only in the beginning, and not each time the component rerenders
  const [dice, setDice] = useState(() => generateAllNewDice())
  const gameBtn = useRef(null)

  // Check if all items are selected and have the same value
  const gameWon = dice.every((item) => item.isSelected && item.value === dice[0].value)

  // Focus New game button at the end
  useEffect(() => {
    if (gameWon) {
      gameBtn.current.focus()
    }
  }, [gameWon])

  function generateAllNewDice() {
    let newDice = []
    for (let i = 0; i < 10; i += 1) {
      newDice.push({
        value: Math.ceil(Math.random() * 6),
        isSelected: false,
        id: nanoid()
      })
    }
    return newDice
  }

  function rollDice() {
    if (gameWon) {
      setDice(generateAllNewDice())
    } else {
      setDice((prev) => prev.map(die => {
        return die.isSelected ?
            die :
            {...die, value: Math.ceil(Math.random() * 6)}
      }))
    }
  }

  function selectDice(id) {
    setDice(oldDice => oldDice.map(die => {
      return die.id === id ?
          {...die, isSelected: !die.isSelected}
          : die
    }))
  }

  return (
      <main className='tenzies-page'>
        {gameWon && <Confetti/>}
        <div aria-live="polite" className="sr-only">
          {gameWon && <p>Congratulations! You won! Press "New Game" to start again.</p>}
        </div>
        <div className='tenzies-wrapper'>
          <h1 className='title'>Tenzies</h1>
          <div className='description'>
            Roll until all dice are the same.
            Click each die to freeze it at its current value between rolls.
          </div>
          <div className='dice-wrapper'>
            {dice.map(item => (
                <Die
                    key={item.id}
                    id={item.id}
                    value={item.value}
                    isSelected={item.isSelected}
                    selectDice={selectDice}
                />)
            )}
          </div>
          <button
              ref={gameBtn}
              onClick={rollDice}
              className='roll-button'
          >
            {gameWon ? 'New game' : 'Roll dice'}
          </button>
        </div>
      </main>
  )
}
