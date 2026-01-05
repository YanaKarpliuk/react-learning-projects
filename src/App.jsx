import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom';
const ReactFacts = lazy(() => import('./Pages/ReactFacts/ReactFacts.jsx'));
const TravelJournal = lazy(() => import('./Pages/TravelJournal/TravelJournal.jsx'));
const ChefClaude = lazy(() => import('./Pages/ChefClaude/ChefClaude.jsx'));
const Home = lazy(() => import('./Pages/Home/Home.jsx'));
const MemeGenerator = lazy(() => import('./Pages/MemeGenerator/MemeGenerator.jsx'));
const Tenzies = lazy(() => import('./Pages/Tenzies/Tenzies.jsx'));
const Hangman = lazy(() => import('./Pages/Hangman/Hangman.jsx'));
const MemoryGame = lazy(() => import('./Pages/MemoryGame/MemoryGame.jsx'));
const PizzaMenu = lazy(() => import('./Pages/PizzaMenu/PizzaMenu.jsx'));
const EatNSplit = lazy(() => import('./Pages/EatNSplit/EatNSplit.jsx'));
const UsePopcorn = lazy(() => import('./Pages/UsePopcorn/UsePopcorn.jsx'));
const ReactQuiz = lazy(() => import('./Pages/ReactQuiz/ReactQuiz.jsx'));
const DateCounter = lazy(() => import('./Pages/DateCounter/DateCounter.jsx'));
const TravelList = lazy(() => import('./Pages/TravelList/TravelList.jsx'));
const AtomicBlog = lazy(() => import('./Pages/AtomicBlog/AtomicBlog.jsx'));
import SharedLayout from './Components/SharedLayout/SharedLayout.jsx';
import { QuizProvider } from "./pages/ReactQuiz/contexts/QuizContext";

function App() {
  return (
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
          <Route path="react-facts" element={<ReactFacts/>}/>
          <Route path="travel-journal" element={<TravelJournal/>}/>
          <Route path="chef-claude" element={<ChefClaude/>}/>
          <Route path="meme-generator" element={<MemeGenerator/>}/>
          <Route path="tenzies" element={<Tenzies/>}/>
          <Route path="hangman" element={<Hangman/>}/>
          <Route path="memory-game" element={<MemoryGame/>}/>
          <Route path="pizza-menu" element={<PizzaMenu/>}/>
          <Route path="travel-list" element={<TravelList/>}/>
          <Route path="eat-n-split" element={<EatNSplit/>}/>
          <Route path="usepopcorn" element={<UsePopcorn/>}/>
          <Route path="date-counter" element={<DateCounter/>}/>
          <Route path="react-quiz" element={
            <QuizProvider>
              <ReactQuiz/>
            </QuizProvider>}/>
          <Route path="atomic-blog" element={<AtomicBlog/>}/>
        </Route>
        <Route path="/">
          <Route index element={<Home/>}/>
        </Route>
      </Routes>
  )
}

export default App
