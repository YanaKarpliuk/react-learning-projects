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
import SharedLayout from './Components/SharedLayout/SharedLayout.jsx';
import TravelList from "./pages/TravelList/TravelList";

function App() {
  return (
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="react-facts" element={<ReactFacts />} />
          <Route path="travel-journal" element={<TravelJournal />} />
          <Route path="chef-claude" element={<ChefClaude />} />
          <Route path="meme-generator" element={<MemeGenerator />} />
          <Route path="tenzies" element={<Tenzies />} />
          <Route path="hangman" element={<Hangman />} />
          <Route path="memory-game" element={<MemoryGame />} />
          <Route path="pizza-menu" element={<PizzaMenu />} />
          <Route path="travel-list" element={<TravelList />} />
        </Route>
        <Route path="/">
          <Route index element={<Home />} />
        </Route>
      </Routes>
  )
}

export default App
