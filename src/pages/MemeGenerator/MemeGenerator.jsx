import Header from "./components/Header"
import Main from "./components/Main"
import './memeGenerator.scss'
import { useEffect } from "react";

export default function MemeGenerator() {
  useEffect(() => {
    document.title = 'Meme Generator'
  }, [])

  return (
      <div className='meme-generator-page'>
        <Header />
        <Main />
      </div>
  )
}
