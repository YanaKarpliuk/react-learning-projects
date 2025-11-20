import { useState, useEffect } from 'react';
import Form from './components/Form';
import MemoryCard from './components/MemoryCard';
import AssistiveTechInfo from "./components/AssistiveTechInfo.jsx";
import GameOver from "./components/GameOver.jsx";
import ErrorCard from "./components/ErrorCard.jsx";
import './memoryGame.scss';

export default function MemoryGame() {
  const initialFormData = {
    category: 'animals-and-nature',
    number: 10
  }

  const [isGameOn, setIsGameOn] = useState(false)
  const [isGameOver, setIsGameOver] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isFirstRender, setIsFirstRender] = useState(true)
  const [emojisData, setEmojisData] = useState([])
  const [selectedCards, setSelectedCards] = useState([])
  const [matchedCards, setMatchedCards] = useState([])
  const [formData, setFormData] = useState(initialFormData)

  useEffect(() => {
    if (selectedCards.length === 2 && selectedCards[0].name === selectedCards[1].name) {
      setMatchedCards(prev => [...prev, ...selectedCards])
    }
  }, [selectedCards])

  useEffect(() => {
    if (emojisData.length && emojisData.length === matchedCards.length) {
      setIsGameOver(true)
    }
  }, [matchedCards])

  function handleFormChange(event) {
    setFormData(prev => {
      return {
        ...prev,
        [event.target.name]: event.target.value
      }
    })
  }

  async function startGame(e) {
    e.preventDefault()
    try {
      const response = await fetch(`https://emojihub.yurace.pro/api/all/category/${formData.category}`);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const result = await response.json();
      const randomIdx = getRandomIndices(result)
      const dataSlice = randomIdx.map(idx => result[idx])
      const randomEmojiArr = getEmojisArray(dataSlice)
      setIsGameOn(true)
      setEmojisData(randomEmojiArr)
    } catch (error) {
      console.error(error.message);
      setIsError(true)
    } finally {
      setIsFirstRender(false)
    }
  }

  function getRandomIndices(data) {
    let randomIndicesArray = []
    for (let i = 0; i < formData.number / 2; i += 1) {
      const randomIndex = Math.floor(Math.random() * data.length);
      if (!randomIndicesArray.includes(randomIndex)) {
        randomIndicesArray.push(randomIndex)
      } else {
        // In case we get the same idx twice, an extra loop will be added to always have exactly 5 nums
        i -= 1
      }
    }
    return randomIndicesArray
  }

  function getEmojisArray(data) {
    const pairedEmojisArray = [...data, ...data]

    // the Fisher-Yates algorithm
    let oldElement;
    for (let i = pairedEmojisArray.length - 1; i > 0; i--) {
      let rand = Math.floor(Math.random() * (i + 1));
      oldElement = pairedEmojisArray[i];
      pairedEmojisArray[i] = pairedEmojisArray[rand];
      pairedEmojisArray[rand] = oldElement;
    }

    return pairedEmojisArray
  }

  function turnCard(name, index) {
    if (selectedCards.length < 2) {
      setSelectedCards(prevSelectedCards => [...prevSelectedCards, {name, index}])
    } else if (selectedCards.length === 2) {
      setSelectedCards([{name, index}])
    }
  }

  function resetGame() {
    setIsGameOver(false)
    setIsGameOn(false)
    setSelectedCards([])
    setMatchedCards([])
  }

  function resetError() {
    setIsError(false)
  }

  return (
      <main className='memory-game'>
        <h1>Memory</h1>
        {!isGameOn && !isError &&
            <Form
                handleSubmit={startGame}
                handleChange={handleFormChange}
                firstRender={isFirstRender}
            />
        }
        {isGameOn && !isGameOver && <AssistiveTechInfo emojisData={emojisData} matchedCards={matchedCards}/>}
        {isGameOver && <GameOver handleClick={resetGame}/>}
        {isGameOn &&
            <MemoryCard
                data={emojisData}
                handleClick={turnCard}
                selectedCards={selectedCards}
                matchedCards={matchedCards}
            />}
        {isError && <ErrorCard handleClick={resetError}/>}
      </main>
  )
}
