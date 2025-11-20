import Header from "./components/Header"
import Main from "./components/Main"
import './memeGenerator.scss'

export default function MemeGenerator() {
  return (
      <div className='meme-generator-page'>
        <Header />
        <Main />
      </div>
  )
}
